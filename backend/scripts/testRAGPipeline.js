// scripts/testRAGPipeline.js
// Script de prueba automatizada para validar el endpoint de búsqueda semántica y RAG de Synapse Dev

require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const axios = require('axios');

const PORT = process.env.PORT || 5000;
const BASE_URL = `http://localhost:${PORT}/api/knowledge`;

async function testPipeline() {
    console.log('🧪 Iniciando pruebas del pipeline RAG para Synapse Dev...');
    console.log(`📡 URL base del servicio: ${BASE_URL}\n`);

    try {
        // Test 1: Búsqueda Semántica
        console.log('🔍 Test 1: Búsqueda Semántica ("cómo descargar cato")');
        const searchRes = await axios.post(`${BASE_URL}/search`, {
            query: 'cómo puedo descargar la aplicación cato'
        });
        console.log('✅ Respuesta de Búsqueda Semántica recibida:');
        console.log(JSON.stringify(searchRes.data, null, 2));
        console.log('--------------------------------------------------\n');

        // Test 2: Pregunta Válida en Contexto
        console.log('🤖 Test 2: Pregunta en contexto ("cuál es el valor de una web básica")');
        const chatResVal = await axios.post(`${BASE_URL}/chat`, {
            question: 'cuánto cuesta diseñar una página web corporativa básica'
        });
        console.log('✅ Respuesta RAG de Pregunta Válida recibida:');
        console.log(JSON.stringify(chatResVal.data, null, 2));
        console.log('--------------------------------------------------\n');

        // Test 3: Pregunta Fuera de Contexto (Evitación de Alucinación / Gating)
        console.log('🛡️  Test 3: Pregunta fuera de contexto ("viaje espacial a la luna")');
        const chatResOut = await axios.post(`${BASE_URL}/chat`, {
            question: 'cómo configuro mi cuenta para viajar en un cohete espacial a la luna'
        });
        console.log('✅ Respuesta RAG de Pregunta Fuera de Contexto recibida:');
        console.log(JSON.stringify(chatResOut.data, null, 2));
        console.log('--------------------------------------------------\n');

        console.log('🎉 ¡Pruebas del pipeline RAG completadas con éxito!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error ejecutando las pruebas del pipeline:', error.response ? error.response.data : error.message);
        process.exit(1);
    }
}

// Esperar un momento por si el servidor se está levantando
setTimeout(testPipeline, 1000);
