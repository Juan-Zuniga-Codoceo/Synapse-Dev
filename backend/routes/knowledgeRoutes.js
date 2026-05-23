// backend/routes/knowledgeRoutes.js
const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const KnowledgeChunk = require('../models/KnowledgeChunk');

/**
 * Calcular la similitud coseno entre dos vectores en JavaScript
 */
function cosineSimilarity(vecA, vecB) {
    let dotProduct = 0.0;
    let normA = 0.0;
    let normB = 0.0;
    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }
    if (normA === 0 || normB === 0) return 0;
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Función auxiliar con fallback robusto para generar embedding de la consulta
 */
async function getQueryEmbeddingWithFallback(text, genAI) {
    const modelsToTry = ['text-embedding-004', 'gemini-embedding-2', 'gemini-embedding-001'];
    let lastError = null;

    for (const modelName of modelsToTry) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.embedContent({
                content: { parts: [{ text }] },
                outputDimensionality: 768
            });
            if (result.embedding && result.embedding.values) {
                console.log(`🤖 Consulta vectorizada con éxito usando: ${modelName}`);
                return result.embedding.values;
            }
        } catch (err) {
            lastError = err;
            // Continuar al siguiente modelo
        }
    }
    throw new Error(`Todos los modelos de embeddings fallaron. Último error: ${lastError ? lastError.message : 'Desconocido'}`);
}

// POST /api/knowledge/search - Búsqueda Semántica
router.post('/search', async (req, res) => {
    const { query } = req.body;

    if (!query || typeof query !== 'string' || query.trim() === '') {
        return res.status(400).json({ error: 'El campo "query" es requerido y debe ser de tipo texto.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('❌ Error: GEMINI_API_KEY no está configurada.');
        return res.status(500).json({ error: 'Error de configuración en el servidor. Falta la API Key de Gemini.' });
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const queryEmbedding = await getQueryEmbeddingWithFallback(query.trim(), genAI);

        // Obtener todos los chunks de MongoDB y calcular similitud coseno en memoria
        const allChunks = await KnowledgeChunk.find({});
        const results = allChunks.map(chunk => {
            const similarity = cosineSimilarity(queryEmbedding, chunk.embedding);
            return {
                id: chunk._id,
                content: chunk.content,
                similarity: similarity
            };
        })
        .filter(item => item.similarity >= 0.4) // Umbral de similitud del 40%
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 3); // Límite de 3

        return res.status(200).json({
            query: query,
            results: results
        });

    } catch (error) {
        console.error('❌ Error en búsqueda semántica:', error);
        return res.status(500).json({ 
            error: 'Error al procesar la búsqueda semántica en la base de conocimientos.',
            message: error.message,
            stack: error.stack
        });
    }
});

// POST /api/knowledge/chat - Generación RAG + Juez de Veracidad
router.post('/chat', async (req, res) => {
    const { question } = req.body;

    if (!question || typeof question !== 'string' || question.trim() === '') {
        return res.status(400).json({ error: 'El campo "question" es requerido y debe ser de tipo texto.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('❌ Error: GEMINI_API_KEY no está configurada.');
        return res.status(500).json({ error: 'Error de configuración en el servidor. Falta la API Key de Gemini.' });
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);

        // 1. Recuperar contexto semántico (Búsqueda in-memory con MongoDB chunks)
        const queryEmbedding = await getQueryEmbeddingWithFallback(question.trim(), genAI);
        const allChunks = await KnowledgeChunk.find({});
        const matchedChunks = allChunks.map(chunk => {
            const similarity = cosineSimilarity(queryEmbedding, chunk.embedding);
            return {
                id: chunk._id,
                content: chunk.content,
                similarity: similarity
            };
        })
        .filter(item => item.similarity >= 0.4)
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 3);

        // Formatear el contexto recuperado
        const contextText = matchedChunks.length > 0 
            ? matchedChunks.map((c, i) => `[Fragmento ${i + 1}]: ${c.content}`).join('\n\n')
            : 'No se encontraron fragmentos de manuales relevantes en la base de datos.';

        // 2. Draft Node: Generar borrador con Gemini 2.5 Flash
        const draftSystemInstruction = `Eres el Asistente Técnico Oficial de Synapse Dev. Tu tarea es responder a la pregunta del usuario utilizando ÚNICAMENTE la información provista en los fragmentos del manual de conocimientos corporativos.

Reglas Estrictas:
1. Responde de manera concisa, clara y directa basándote únicamente en los fragmentos provistos.
2. Si los fragmentos no contienen la respuesta a la pregunta, debes responder exactamente: "No cuento con información oficial para responder."
3. No inventes, asumas, ni infieras información fuera del contexto provisto.`;

        const draftModel = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            systemInstruction: draftSystemInstruction
        });

        const draftPrompt = `Contexto del manual de soporte:
${contextText}

Pregunta del usuario: ${question.trim()}

Respuesta sugerida:`;

        const draftResponse = await draftModel.generateContent({
            contents: [{ role: 'user', parts: [{ text: draftPrompt }] }],
            generationConfig: { temperature: 0.0 } // Determinismo máximo
        });

        const draftText = draftResponse.response.text().trim();
        console.log(`🤖 Borrador generado por RAG para Synapse Dev:\n"${draftText}"\n`);

        // 3. Juez de Veracidad Node: Evaluar fidelidad (Structured Outputs)
        const judgeSystemInstruction = `Actúas como un Juez de Veracidad y Auditor de Alucinaciones para el sistema RAG de Synapse Dev.
Tu trabajo es evaluar si el borrador de respuesta generado por el asistente está respaldado al 100% por los fragmentos originales del manual de conocimiento provistos para responder la pregunta del usuario.

Criterios de evaluación:
1. Evalúa si el borrador responde la pregunta del usuario utilizando únicamente el contexto de los fragmentos.
2. La respuesta no debe agregar información externa que no aparezca en los fragmentos de manuales.
3. Si la pregunta del usuario NO se puede responder con los fragmentos de manuales, y el borrador responde exactamente "No cuento con información oficial para responder.", califícalo con un score de 1.0 (es una negativa correcta y fiel, sin alucinación).
4. Si el borrador intenta responder la pregunta agregando afirmaciones, suposiciones o datos que no se mencionan explícitamente en los fragmentos, califícalo con un score menor a 0.8 (por ejemplo, 0.0 a 0.5 según la gravedad de la alucinación).`;

        const judgeResponseSchema = {
            type: "OBJECT",
            properties: {
                score: { 
                    type: "NUMBER", 
                    description: "Puntaje de fidelidad de 0.0 a 1.0. 1.0 indica respaldo absoluto o declaración de falta de información oficial correcta. Menor a 0.8 indica alucinaciones o adiciones no respaldadas." 
                },
                reason: { 
                    type: "STRING", 
                    description: "Explicación breve del veredicto, identificando si la respuesta es fiel al contexto para la pregunta dada." 
                }
            },
            required: ["score", "reason"]
        };

        const judgeModel = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            systemInstruction: judgeSystemInstruction
        });

        const judgePrompt = `Pregunta original del usuario:
"${question.trim()}"

Fragmentos del manual original:
${contextText}

Borrador de respuesta a evaluar:
"${draftText}"`;

        const judgeResult = await judgeModel.generateContent({
            contents: [{ role: 'user', parts: [{ text: judgePrompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: judgeResponseSchema,
                temperature: 0.0 // Determinismo máximo
            }
        });

        const judgeText = judgeResult.response.text().trim();
        console.log(`⚖️  Veredicto del Juez de Veracidad:\n${judgeText}\n`);

        let judgeEvaluation;
        try {
            judgeEvaluation = JSON.parse(judgeText);
        } catch (parseError) {
            console.error('❌ Error parseando respuesta del Juez:', parseError);
            judgeEvaluation = { score: 0.0, reason: 'Error al parsear el dictamen del juez' };
        }

        // 4. Lógica de Gating (Control de Alucinaciones)
        const PASS_THRESHOLD = 0.8;
        
        if (judgeEvaluation.score >= PASS_THRESHOLD) {
            console.log('✅ Respuesta aprobada por el Juez de Veracidad.');
            return res.status(200).json({
                success: true,
                answer: draftText,
                judge: {
                    score: judgeEvaluation.score,
                    reason: judgeEvaluation.reason
                },
                context_used: matchedChunks.map(c => ({ id: c.id, content: c.content }))
            });
        } else {
            console.warn(`⚠️ Alucinación detectada. Score del Juez: ${judgeEvaluation.score}. Razón: ${judgeEvaluation.reason}`);
            return res.status(200).json({
                success: false,
                answer: "Lamentamos los inconvenientes. No hemos encontrado información 100% verídica en los manuales oficiales de Synapse Dev para responder a tu consulta de forma segura. Por favor, contáctanos directamente a través de WhatsApp para asistirte de inmediato.",
                judge: {
                    score: judgeEvaluation.score,
                    reason: judgeEvaluation.reason
                },
                original_draft: draftText,
                context_used: matchedChunks.map(c => ({ id: c.id, content: c.content }))
            });
        }

    } catch (error) {
        console.error('❌ Error en chat de conocimiento:', error);
        return res.status(500).json({ 
            error: 'Error al procesar el chat inteligente con la base de conocimientos.',
            message: error.message,
            stack: error.stack
        });
    }
});

module.exports = router;
