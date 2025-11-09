// Función principal para obtener respuestas automáticas
export const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
  
    // Respuesta inicial cuando el usuario saluda
    if (
      lowerCaseMessage.includes("hola") ||
      lowerCaseMessage.includes("buenos días") ||
      lowerCaseMessage.includes("buenas tardes") ||
      lowerCaseMessage.includes("buenas noches")
    ) {
      return {
        text: `¡Hola! Soy el asistente virtual de Synapse Dev. 😊  
  Estoy aquí para ayudarte. ¿En qué puedo asistirte hoy?`,
        options: ["🌐 Servicios", "💰 Precios", "📞 Contacto", "🎨 Portafolio", "📚 Blog"],
      };
    }
  
    // Opciones principales
    if (lowerCaseMessage.includes("servicios")) {
      return {
        text: `Nuestros servicios principales incluyen:
  - 🌐 **Diseño y desarrollo de páginas web**: Sitios responsivos, optimizados para SEO y con panel administrable.
  - 🛒 **Tiendas online**: Soluciones en Shopify, WordPress o creadas desde cero.
  - 🔍 **Posicionamiento SEO**: Optimización para aparecer en los primeros resultados de Google.
  - 🤝 **Asesoría digital**: Estrategia de marketing y plan de ventas online.
  - 🤖 **Chatbots y correos empresariales**: Automatización y comunicación profesional.`,
        options: [],
      };
    }
  
    if (lowerCaseMessage.includes("precios")) {
      return {
        text: `Los precios de nuestros servicios son:
  - Página web básica: Desde $249.990 CLP + IVA.
  - Tienda online en Shopify: Desde $99.990 CLP + IVA.
  - Mantenimiento web: Desde $39.990 CLP/mes.`,
        options: [],
      };
    }
  
    if (lowerCaseMessage.includes("contacto")) {
      return {
        text: `Puedes contactarnos a través de:
  - WhatsApp: [+56 9 2833 3538](https://wa.me/+56928333538)
  - Correo electrónico: [contacto@synapsedev.cl](mailto:contacto@synapsedev.cl)
  - Teléfono: +56 9 2833 3538
  - Instagram: [synapse_dev](https://www.instagram.com/synapse_dev/)
  - Facebook: [Synapse Dev](https://www.facebook.com/profile.php?id=61563375403408)`,
        options: [],
      };
    }
  
    if (lowerCaseMessage.includes("portafolio")) {
      window.open("/portfolio", "_blank");
      return {
        text: "Aquí tienes nuestro portafolio: [Ver Portafolio](/portfolio)",
        options: [],
      };
    }
  
    if (lowerCaseMessage.includes("blog")) {
      window.open("/blog", "_blank");
      return {
        text: "Aquí tienes nuestro blog: [Ver Blog](/blog)",
        options: [],
      };
    }
  
    // Mensaje predeterminado si no se entiende la pregunta
    return {
      text: `Lo siento, no entendí tu pregunta. ¿Podrías intentarlo de nuevo o contactar a nuestro equipo?
  También puedes escribirnos por WhatsApp: [WhatsApp](https://wa.me/+56928333538)`,
      options: [],
    };
  };