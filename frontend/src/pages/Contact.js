import React from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1msab3m', 'template_xiw5q6u', e.target, 'SlG90DUKfXFv5Dr8I')
      .then((result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito");
      }, (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el mensaje");
      });

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
          <button type="submit" className="cta-button">Enviar Mensaje</button>
        </form>
      </section>

        <section className="contact-social">
        <div className="social-media">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
