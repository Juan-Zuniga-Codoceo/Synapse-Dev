import React, { useState } from "react";
import { getBotResponse } from "./logic"; // Importamos la lógica de respuestas
import "./styles.css";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad
  const [messages, setMessages] = useState([]); // Estado para almacenar mensajes
  const [inputValue, setInputValue] = useState(""); // Estado para el input del usuario

  // Función para manejar el envío de mensajes
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Agregar mensaje del usuario
    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue); // Obtener respuesta usando logic.js
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse.text, sender: "bot", options: botResponse.options },
      ]);
    }, 500);

    setInputValue(""); // Limpiar el input
  };

  // Función para manejar clics en opciones del bot
  const handleOptionClick = (option) => {
    setInputValue(option); // Establecer la opción en el input
    handleSendMessage(); // Enviar el mensaje automáticamente
  };

  return (
    <div className="chatbot-widget">
      {/* Botón para abrir/cerrar el chatbot */}
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        💬 Asistente Virtual
      </button>

      {/* Ventana del chatbot */}
      <div className={`chatbot-window ${isOpen ? "active" : ""}`}>
        <div className="chatbot-header">Asistente Virtual</div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender}`}
              style={{ textAlign: msg.sender === "user" ? "right" : "left" }}
            >
              <span
                className={`message-bubble ${
                  msg.sender === "user" ? "user-bubble" : "bot-bubble"
                }`}
              >
                {msg.text}
              </span>
              {/* Mostrar opciones si existen */}
              {msg.options && (
                <div className="options-container">
                  {msg.options.map((option, idx) => (
                    <button
                      key={idx}
                      className="option-button"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe un mensaje..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotWidget;