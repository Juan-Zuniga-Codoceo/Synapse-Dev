import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import '../css/ContactSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const onReCAPTCHAChange = (token) => {
    setRecaptchaToken(token);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Por favor, completa el reCAPTCHA.");
      return;
    }

    const formData = new FormData(e.target);
    formData.append('token', recaptchaToken);

    fetch('/send-email', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Mensaje enviado con éxito');
        } else {
          alert('Hubo un error al enviar el mensaje');
        }
      })
      .catch((error) => {
        console.log(error);
        alert('Hubo un error al enviar el mensaje');
      });

    e.target.reset();
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-form-wrapper">
          <h2>Contáctanos</h2>
          <br/>
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Nombre" required />
              <div className="phone-email">
                <input type="text" name="phone" placeholder="+56 Teléfono" />
                <input type="email" name="email" placeholder="E-mail" required />
              </div>
              <textarea name="message" placeholder="Mensaje" required></textarea>
            </div>
            <ReCAPTCHA
              sitekey="6LdR7R4qAAAAAE2eXndfpsP1iiCtvEuUIJhSbwBv"
              onChange={onReCAPTCHAChange}
            />
            <button type="submit" className="submit-button">Enviar</button>
          </form>
          <div className="social-media">
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTiktok} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            </ul>
          </div>
        </div>
        <div className="map-wrapper">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9556310483485!2d-122.08424968468149!3d37.4219997798251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a6b2a4e3f3%3A0x2b1c8e1a0b3b2b0e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600904514455!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
