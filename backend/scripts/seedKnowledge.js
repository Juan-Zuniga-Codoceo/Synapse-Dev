// scripts/seedKnowledge.js
// Script de Ingesta y Vectorización de Base de Conocimientos para Synapse Dev
// Utiliza Google Gemini 'text-embedding-004' (768 dimensiones) y MongoDB/Mongoose

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const fs = require('fs');
const mongoose = require('mongoose');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const KnowledgeChunk = require('../models/KnowledgeChunk');

// 1. Configuración de Gemini API
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error('❌ Error: La variable de entorno GEMINI_API_KEY no está configurada.');
    console.error('Por favor, agrégala en tu archivo .env local antes de continuar.');
    process.exit(1);
}
const genAI = new GoogleGenerativeAI(apiKey);

// Algoritmo de Ventana Deslizante (Sliding Window Chunker)
function chunkText(text, chunkSize = 500, overlap = 100) {
    if (text.length <= chunkSize) {
        return [text];
    }
    const chunks = [];
    let i = 0;
    while (i < text.length) {
        const chunk = text.slice(i, i + chunkSize);
        chunks.push(chunk);
        i += (chunkSize - overlap);
        if (i >= text.length - overlap) {
            break;
        }
    }
    return chunks;
}

// Función auxiliar para obtener embeddings con fallback robusto
async function getEmbeddingWithFallback(text) {
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
                return result.embedding.values;
            }
        } catch (err) {
            lastError = err;
            // Continuar al siguiente modelo en caso de error
        }
    }
    throw new Error(`Todos los modelos de embeddings fallaron. Último error: ${lastError ? lastError.message : 'Desconocido'}`);
}

async function run() {
    const filePath = path.join(__dirname, '../data/knowledge.txt');

    console.log('📂 Leyendo base de conocimientos de Synapse Dev...');
    if (!fs.existsSync(filePath)) {
        console.error(`❌ Error: El archivo ${filePath} no existe.`);
        process.exit(1);
    }

    const textContent = fs.readFileSync(filePath, 'utf-8');
    
    // Segmentar el texto usando el algoritmo de ventana deslizante
    console.log('✂️  Segmentando texto en fragmentos (chunks) con ventana deslizante...');
    const chunks = chunkText(textContent, 500, 100);
    console.log(`📊 Total de fragmentos generados: ${chunks.length}\n`);

    try {
        // Conectar a MongoDB
        console.log('🔌 Conectando a MongoDB...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Conectado exitosamente a MongoDB');

        // Limpiar registros antiguos para evitar duplicados en el demo
        console.log('🧹 Limpiando colección anterior de chunks...');
        await KnowledgeChunk.deleteMany({});
        console.log('🧹 Limpieza completada.');

        for (let idx = 0; idx < chunks.length; idx++) {
            const chunk = chunks[idx].trim();
            if (!chunk) continue;

            console.log(`🤖 Generando embedding para el fragmento ${idx + 1}/${chunks.length}...`);
            console.log(`📝 Contenido: "${chunk.substring(0, 60)}..."`);
            
            // Generar vector usando la función con fallback
            const embedding = await getEmbeddingWithFallback(chunk);

            if (!embedding || embedding.length !== 768) {
                throw new Error(`El vector devuelto no tiene la dimensión esperada de 768. Dimensión recibida: ${embedding ? embedding.length : 0}`);
            }

            // Crear y guardar el chunk en MongoDB
            const newChunk = new KnowledgeChunk({
                content: chunk,
                embedding: embedding
            });
            await newChunk.save();

            console.log(`✅ Fragmento ${idx + 1} insertado con éxito en MongoDB.\n`);
        }

        console.log('🎉 ¡Proceso de ingesta y vectorización completado con éxito!');

    } catch (error) {
        console.error('❌ Error crítico en el proceso de ingesta:', error.message || error);
    } finally {
        await mongoose.disconnect();
        console.log('🔌 Desconectado de MongoDB.');
    }
}

run();
