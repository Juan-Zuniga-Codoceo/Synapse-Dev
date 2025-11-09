// frontend/src/components/layout/ChatbotWidget/logic.js
export const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (
      lowerCaseMessage.includes("hola") ||
      lowerCaseMessage.includes("buenos días") ||
      lowerCaseMessage.includes("buenas tardes") ||
      lowerCaseMessage.includes("buenas noches")
    ) {
      return {
        text: `¡Hola! Soy el asistente virtual de Synapse Dev. 😊 Estoy aquí para ayudarte. ¿En qué puedo asistirte hoy?`,
        options: ["🌐 Servicios", "💰 Precios", "📞 Contacto", "🎨 Portafolio", "📚 Blog", "🚀 Demo Operia"], // <-- AÑADIDO
      };
    }
  
    // Opciones principales
    if (lowerCaseMessage.includes("servicios")) {
      return {
        text: `Nuestros servicios principales incluyen:\n- 🌐 Diseño y desarrollo de páginas web\n- 🛒 Tiendas online\n- 🔍 Posicionamiento SEO\n- 🤝 Asesoría digital\n- 🤖 Chatbots y correos empresariales.`,
        options: [],
      };
    }
  
    if (lowerCaseMessage.includes("precios")) {
      return {
        text: `Los precios de nuestros servicios son:\n- Página web básica: Desde $249.990 CLP + IVA.\n- Tienda online en Shopify: Desde $99.990 CLP + IVA.\n- Mantenimiento web: Desde $39.990 CLP/mes.`,
        options: [],
      };
    }
  
    if (lowerCaseMessage.includes("contacto")) {
      return {
        text: `Puedes contactarnos a través de:\n- WhatsApp: [+56 9 2833 3538](https://wa.me/+56928333538)\n- Correo: [contacto@synapsedev.cl](mailto:contacto@synapsedev.cl)\n- Teléfono: +56 9 2833 3538`,
        options: [],
      };
    }
  
    if (lowerCaseMessage.includes("portafolio")) {
      return {
        text: "¡Claro! Abriendo nuestro portafolio...",
        options: [],
        action: 'navigate', 
        url: '/portfolio'    
      };
    }
  
    if (lowerCaseMessage.includes("blog")) {
      return {
        text: "Redirigiendo a nuestro blog...",
        options: [],
        action: 'navigate',
        url: '/blog'
      };
    }

    // --- RESPUESTA NUEVA ---
    if (lowerCaseMessage.includes("operia")) {
      return {
        text: "¡Excelente! Abriendo nuestro demo de Operia...",
        options: [],
        action: 'navigate',
        url: '/operia'
      };
    }
  
    // Mensaje predeterminado
    return {
      text: `Lo siento, no entendí tu pregunta. ¿Podrías intentarlo de nuevo o contactar a nuestro equipo? También puedes escribirnos por WhatsApp: [WhatsApp](https://wa.me/+56928333538)`,
      options: [],
    };
};