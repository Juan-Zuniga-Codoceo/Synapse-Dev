// frontend/src/components/layout/ChatbotWidget/index.js
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef(null);

  // Inicializar conversación
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          text: "¡Hola! Soy el Asistente Técnico Oficial de Synapse Dev. 😊 ¿En qué puedo ayudarte hoy? Puedes consultarme sobre nuestros servicios, tarifas de páginas web, tiendas online o sobre nuestros desarrollos como CATO: LIFE OS y Operia.",
          sender: "ia",
          success: true
        }
      ]);
    }
  }, [messages.length]);

  // Auto-scroll al final al recibir o enviar mensajes
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    const queryText = inputValue.trim();
    if (!queryText || loading) return;

    // Agregar mensaje del usuario a la vista
    setMessages((prev) => [...prev, { text: queryText, sender: "user" }]);
    setInputValue("");
    setLoading(true);

    try {
      const baseUrl = process.env.REACT_APP_API_URL || "";
      const response = await fetch(`${baseUrl}/api/knowledge/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: queryText }),
      });

      if (!response.ok) {
        throw new Error("Error en la conexión con el servidor");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          text: data.answer,
          sender: "ia",
          success: data.success,
          judge: data.judge,
        },
      ]);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Lamentamos los inconvenientes. Hubo un error de conexión con nuestros servidores de soporte. Por favor, intenta de nuevo o comunícate directamente con nuestro equipo técnico.",
          sender: "ia",
          success: false,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const contactHumanTech = () => {
    window.open("https://wa.me/56940413646", "_blank");
  };

  return (
    <div className="chatbot-widget">
      {/* Botón flotante */}
      <button 
        className={`chatbot-launcher ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        title="Soporte Inteligente"
      >
        <span className="chat-icon">{isOpen ? "✖" : "🤖"}</span>
        <span className="pulse-ring"></span>
      </button>

      {/* Ventana de Chat superpuesta */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header del Chat */}
          <div className="chatbot-header">
            <div className="chatbot-title-area">
              <span className="bot-avatar">🤖</span>
              <div className="title-text">
                <h4>Soporte Inteligente</h4>
                <span className="chat-status">
                  <span className="status-dot"></span> En línea (IA RAG)
                </span>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </button>
          </div>

          {/* Cuerpo del Chat */}
          <div className="chatbot-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble-wrapper ${msg.sender}`}>
                <div className={`chat-bubble ${msg.sender === "ia" && !msg.success ? "hallucination-fallback" : ""}`}>
                  <p>{msg.text}</p>
                  
                  {/* Badge de Verificación Juez */}
                  {msg.sender === "ia" && msg.success && msg.judge && (
                    <div className="chat-verification-badge">
                      <span className="check-icon">✓</span> verificado (Fidelidad: {(msg.judge.score * 100).toFixed(0)}%)
                    </div>
                  )}

                  {/* Botón de acción para contactar por WhatsApp si falla la veracidad */}
                  {msg.sender === "ia" && !msg.success && (
                    <div className="chat-fallback-action">
                      <button className="btn-chat-action" onClick={contactHumanTech}>
                        💬 Contactar por WhatsApp
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Indicador de carga */}
            {loading && (
              <div className="chat-bubble-wrapper ia">
                <div className="chat-bubble loading">
                  <div className="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="loading-text">🤖 Validando respuesta...</div>
                </div>
              </div>
            )}
          </div>

          {/* Área de Input y Envío */}
          <form className="chatbot-input-area" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu consulta..."
              disabled={loading}
            />
            <button 
              type="submit" 
              className="chat-send-btn" 
              disabled={loading || !inputValue.trim()}
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;