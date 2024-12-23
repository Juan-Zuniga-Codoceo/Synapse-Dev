// src/components/home/StatisticsSection/index.js
import React from 'react';
import { FaCheckCircle, FaChartLine, FaStar, FaHandshake } from 'react-icons/fa';
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
                </div>
            </Animation>
        </section>
    );
};

export default StatisticsSection;