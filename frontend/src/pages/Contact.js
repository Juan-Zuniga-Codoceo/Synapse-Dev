import React, { useState } from 'react';
import Loader from 'react-loaders';
import '../css/Contact.css';
import 'loaders.css/src/animations/ball-spin-fade-loader.scss'; // Importar la animación

const Contact = () => {
  const [loading, setLoading] = useState(false); // Estado para manejar el loader

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); // Mostrar el loader cuando se envía el formulario

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Mensaje enviado con éxito');
      } else {
        alert('Hubo un error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje');
    } finally {
      setLoading(false); // Ocultar el loader cuando se recibe la respuesta
    }

    e.target.reset();
  };

  return (
    <div className="contact-page-container">
      <header className="contact-hero">
        <div className="overlay">
          <h1>¿Listo para conectar?</h1>
          <p>Estamos aquí para ayudarte.</p>
        </div>
      </header>

      <section className="contact-form">
        <h2>Contáctanos</h2>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Correo Electrónico" required />
          <input type="text" name="subject" placeholder="Asunto" required />
          <textarea name="message" placeholder="Mensaje" required></textarea>
          <button type="submit" className="cta-button" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </section>

      <section className="contact-social">
        <div className="social-media">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </section>

      {loading && (
        <div className="loader-overlay"> {/* Capa oscura */}
          <Loader type="ball-spin-fade-loader" />
        </div>
      )}
    </div>
  );
};

export default Contact;
