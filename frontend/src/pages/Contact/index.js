import React, { useState } from 'react';
import Loader from 'react-loaders';
import './styles/Contact.css';
import 'loaders.css/src/animations/ball-spin-fade-loader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import heroImage from '../../assets/images/heroes/contact-hero.webp';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('https://www.synapsedev.cl/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // Agregamos CORS headers si es necesario
          'Access-Control-Allow-Origin': '*'
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
      setLoading(false);
    }

    e.target.reset();
  };
  
  const contactInfo = [
    {
      icon: faPhone,
      title: "Teléfono",
      info: "+56 9 2033 3538",
      link: "tel:+56920333538"
    },
    {
      icon: faEnvelope,
      title: "Email",
      info: "contacto@synapsedev.cl",
      link: "mailto:contacto@synapsedev.cl"
    },
    {
      icon: faLocationDot,
      title: "Ubicación",
      info: "Santiago, Chile",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: faFacebookF, link: "#", label: "Facebook" },
    { icon: faTwitter, link: "#", label: "Twitter" },
    { icon: faInstagram, link: "#", label: "Instagram" },
    { icon: faLinkedinIn, link: "#", label: "LinkedIn" }
  ];

  return (
    <div className="contact-page-renamed">
      <header 
        className="contact-hero-renamed"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(16, 37, 50, 0.75),
            rgba(16, 37, 50, 0.65)
          ), url(${heroImage})`
        }}
      >
        <div className="hero-content-renamed">
          <h1>¿Listo para conectar?</h1>
          <p>Estamos aquí para ayudarte a hacer realidad tu próximo proyecto.</p>
        </div>
      </header>

      <main className="contact-main-renamed">
        <section className="contact-info-renamed">
          <h2 className="section-title-renamed">Información de Contacto</h2>
          <p className="section-description-renamed">
            Encuentra la mejor manera de conectarte con nosotros
          </p>
          <div className="info-grid-renamed">
            {contactInfo.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                className="info-card-renamed"
                rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                target={item.link.startsWith('http') ? "_blank" : undefined}
              >
                <FontAwesomeIcon icon={item.icon} className="info-icon-renamed" />
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-form-section-renamed">
          <div className="form-container-renamed">
            <h2 className="section-title-renamed">Envíanos un mensaje</h2>
            <form onSubmit={sendEmail} className="contact-form-renamed">
              <div className="form-group-renamed">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="form-group-renamed">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  required
                />
              </div>
              <div className="form-group-renamed">
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  required
                />
              </div>
              <div className="form-group-renamed">
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="submit-button-renamed"
                disabled={loading}
              >
                <span>{loading ? 'Enviando...' : 'Enviar Mensaje'}</span>
                {!loading && <FontAwesomeIcon icon={faPaperPlane} />}
              </button>
            </form>
          </div>
        </section>

        <section className="social-section-renamed">
          <h2 className="section-title-renamed">Síguenos en redes sociales</h2>
          <div className="social-links-renamed">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="social-link-renamed"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </section>
      </main>

      {loading && (
        <div className="loader-overlay-renamed">
          <div className="contact-page-loader-overlay">
            <Loader type="ball-spin-fade-loader" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;