import React from 'react';
import { FaCheckCircle, FaChartLine, FaStar, FaHandshake, FaQuoteLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import Animation from '../../layout/Animation';
import './styles.css';

const StatisticsSection = () => {
    const stats = [
        {
            number: "50+",
            label: "Proyectos Completados",
            icon: <FaChartLine className="stat-icon" />
        },
        {
            number: "98%",
            label: "Clientes Satisfechos",
            icon: <FaCheckCircle className="stat-icon" />
        },
        {
            number: "2",
            label: "Años de Experiencia",
            icon: <FaStar className="stat-icon" />
        },
        {
            number: "100%",
            label: "Compromiso",
            icon: <FaHandshake className="stat-icon" />
        }
    ];

    const testimonials = [
        {
            name: "Mi Semilla Negra",
            role: "Salsas Orientales",
            quote: "Synapse Dev transformó nuestra visión en una experiencia digital única. Su enfoque en el diseño y la funcionalidad superó nuestras expectativas.",
            rating: 5
        },
        {
            name: "Matrona Naty",
            role: "Cuidado especializado de la mujer",
            quote: "Profesionalismo y atención al detalle excepcionales. Lograron capturar perfectamente la esencia de nuestros servicios en la web.",
            rating: 5
        },
        {
            name: "Spend Shield",
            role: "Finanzas Personales",
            quote: "La plataforma que desarrollaron no solo es hermosa visualmente, sino también intuitiva y funcional. Exactamente lo que necesitábamos.",
            rating: 5
        },
        {
            name: "Andrés González",
            role: "Abogado",
            quote: "La landing page superó todas mis expectativas. El diseño profesional y la optimización han mejorado significativamente mi presencia online.",
            rating: 5
        }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="statistics-section">
            <Animation animation="fade-up">
                <div className="statistics-container">
                    <div className="section-header">
                        <h2>Nuestros Números</h2>
                        <p className="section-subtitle">
                            Resultados que respaldan nuestro<br/>
                            compromiso con la excelencia
                        </p>
                    </div>
                    <div className="stats-container">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                {stat.icon}
                                <h3 className="stat-number">{stat.number}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="testimonials-section">
                        <h2>Lo Que Dicen Nuestros Clientes</h2>
                        <div className="testimonials-container">
                            <Slider {...sliderSettings}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="testimonial-item">
                                        <div className="testimonial-content">
                                            <FaQuoteLeft className="quote-icon" />
                                            <p className="testimonial-quote">{testimonial.quote}</p>
                                            <div className="testimonial-author">
                                                <div className="author-info">
                                                    <h4>{testimonial.name}</h4>
                                                    <p>{testimonial.role}</p>
                                                </div>
                                                <div className="testimonial-rating">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <FaStar key={i} className="rating-star" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </Animation>
        </section>
    );
};

export default StatisticsSection;