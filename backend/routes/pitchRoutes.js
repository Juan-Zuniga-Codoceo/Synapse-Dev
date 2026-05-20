const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// POST /api/generate-pitch
router.post('/generate-pitch', async (req, res) => {
  const { ideaNegocio, publicoObjetivo, tonoVoz } = req.body;

  // Validación básica de entrada
  if (!ideaNegocio || !publicoObjetivo || !tonoVoz) {
    return res.status(400).json({ error: 'Faltan campos requeridos: ideaNegocio, publicoObjetivo o tonoVoz' });
  }

  // Verificar que la API Key de Gemini esté configurada
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    console.error('Error: GEMINI_API_KEY no está configurada en las variables de entorno.');
    return res.status(500).json({ error: 'Error de configuración en el servidor. Falta la API Key de Gemini.' });
  } else {
    const maskedKey = `${key.substring(0, 6)}...${key.substring(key.length - 4)}`;
    console.log(`[Pitch API] Inicializando Gemini con API Key: ${maskedKey}`);
  }

  try {
    // Configurar cabeceras para Streaming
    // Usamos text/plain con codificación utf-8 para transmitir directamente texto plano.
    // Esto simplifica la lectura en el frontend sin tener que parsear SSE (Server-Sent Events) complejos.
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no'); // Desactivar almacenamiento en caché (buffering) en proxies como Nginx o Render

    // Inicializar el SDK de Gemini
    const genAI = new GoogleGenerativeAI(key);
    
    // System instruction para definir el rol y estilo de la IA
    const systemInstruction = `Eres un experto en marketing digital, redactor creativo y Copywriter profesional chileno de la agencia Synapse Dev (synapsedev.cl).
Tu misión es redactar propuestas de venta atractivas, "Pitches" comerciales o textos publicitarios de alto impacto orientados a emprendedores en Chile.

Al redactar, debes seguir estas reglas estrictas:
1. Adapta la propuesta según la idea de negocio, el público objetivo y el tono de voz especificado por el usuario.
2. Los tonos de voz permitidos son:
   - "Persuasivo": Enfocado en beneficios claros, conversión, llamadas a la acción directas y ganchos emocionales potentes.
   - "Entusiasta": Lleno de energía, dinámico, transmitiendo pasión por el proyecto de manera vibrante.
   - "Formal": Corporativo, profesional, serio, impecable en la redacción, ideal para clientes corporativos o B2B.
   - "Cercano/Chileno": Amistoso, cálido, utilizando modismos y chilenismos sutiles de forma muy natural y profesional (ej: "al tiro", "cachai", "pega", "pyme", "socios", sin caer en vulgaridades ni exceso de jerga informal).
3. Si el texto requiere mencionar presupuestos, precios o valores de ejemplo, usa siempre pesos chilenos (CLP) en formato adecuado (ej: $10.000, $1.500.000).
4. El formato de salida debe ser limpio, estructurado y atractivo. Utiliza negritas de Markdown, viñetas y saltos de línea para que sea fácil de leer en pantalla.
5. Estructura la respuesta de la siguiente forma:
   - Gancho Inicial (Hook): Una frase rompedora para captar la atención del público objetivo.
   - El Problema y la Solución: Explicación breve de lo que resuelve el negocio.
   - Propuesta de Valor Única: Por qué el cliente debería elegir este negocio.
   - Llamada a la Acción (CTA) clara, invitándolo a actuar de inmediato, contextualizada para el mercado chileno.`;

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      systemInstruction: systemInstruction
    });

    const userPrompt = `Genera una propuesta de venta con los siguientes detalles:
- Idea de Negocio o Emprendimiento: "${ideaNegocio}"
- Público Objetivo o Cliente Ideal: "${publicoObjetivo}"
- Tono de Voz solicitado: "${tonoVoz}"

Recuerda estructurar el pitch con el gancho, problema/solución, propuesta de valor y CTA chileno.`;

    // Solicitar el flujo de streaming de Gemini
    const result = await model.generateContentStream([
      { text: userPrompt }
    ]);

    // Leer el stream de Gemini y transmitirlo al cliente en tiempo real
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      res.write(chunkText);
    }

    // Finalizar la respuesta HTTP una vez completado el flujo
    res.end();

  } catch (error) {
    console.error('Error durante la generación del Pitch con Gemini:', error);
    // Si las cabeceras aún no se han enviado, respondemos con 500 JSON
    if (!res.headersSent) {
      res.status(500).json({ error: 'Ocurrió un error al generar la propuesta de venta.' });
    } else {
      // Si ya se enviaron las cabeceras, finalizamos la respuesta abruptamente
      res.end();
    }
  }
});

module.exports = router;
