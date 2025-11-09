// frontend/src/components/layout/ChatbotWidget/index.js
import React, { useState, useEffect } from "react";
import { getBotResponse } from "./logic";
import "./styles.css";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const botResponse = getBotResponse("hola"); 
      setMessages([
        { text: botResponse.text, sender: "bot", options: botResponse.options }
      ]);
    }
  }, [isOpen, messages.length]); // <-- 1. ARREGLO: AÑADIMOS 'messages.length' AQUÍ

  const handleSendMessage = () => {
    const messageToSend = inputValue.trim();
    if (messageToSend === "") return;

    const userMessage = { text: messageToSend, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue(""); 

    setTimeout(() => {
      const botResponse = getBotResponse(messageToSend); 
      
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse.text, sender: "bot", options: botResponse.options },
      ]);

      if (botResponse.action === 'navigate' && botResponse.url) {
        setTimeout(() => {
          window.open(botResponse.url, "_blank");
        }, 800);
      }
    }, 500);
  };

  // Esta función es la que arregla el CLIC
  const handleOptionClick = (option) => {
    const userMessage = { text: option, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setTimeout(() => {
      const botResponse = getBotResponse(option);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse.text, sender: "bot", options: botResponse.options },
      ]);

      if (botResponse.action === 'navigate' && botResponse.url) {
        setTimeout(() => {
          window.open(botResponse.url, "_blank");
        }, 800);
      }
    }, 500);
  };

  return (
    <div className="chatbot-widget">
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

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