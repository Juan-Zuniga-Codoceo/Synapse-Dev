// frontend/src/pages/Cato/index.js
import React, { useState, useEffect } from 'react';
import './styles.css';
import Animation from '../../components/layout/Animation';
import {
    Zap,
    Target,
    Gamepad2,
    CheckCircle,
    Download,
    AlertCircle,
    Shield,
    DollarSign,
    TrendingUp,
    Award,
    Settings,
    Smartphone
} from 'lucide-react';

// Importar las imágenes de CATO
import dashboardDark from '../../img/Cato/Dashboard-Dark.png';
import finanzasImg from '../../img/Cato/Finanzas.png';
import rpgImg from '../../img/Cato/RPG.png';
import adultModeImg from '../../img/Cato/Adult Mode.png';
import qrCodeImg from '../../img/Cato/QR.png';
import googlePlayLogo from '../../img/Cato/Google Play PlayStore Logo.png';

const Cato = () => {
    // Estado para las estadísticas de descarga
    const [downloadCount, setDownloadCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Meta de la Fase Alpha
    const ALPHA_GOAL = 100;

    // Fetch de estadísticas al cargar el componente
    useEffect(() => {
        const fetchDownloadStats = async () => {
            try {
                const response = await fetch('/api/view-stats');
                if (response.ok) {
                    const data = await response.json();
                    setDownloadCount(data.total_downloads || 0);
                }
            } catch (error) {
                console.error('Error al obtener estadísticas:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDownloadStats();
    }, []);

    // Calcular porcentaje de progreso
    const progressPercentage = Math.min((downloadCount / ALPHA_GOAL) * 100, 100);

    const features = [
        {
            icon: <Gamepad2 size={40} />,
            title: 'Gamificación Total',
            description: 'Convierte tu vida en un RPG. Gana XP, sube de nivel y desbloquea logros mientras completas tus objetivos diarios.'
        },
        {
            icon: <Target size={40} />,
            title: 'Módulos de Productividad',
            description: 'Gestión de finanzas, hábitos, Pomodoro, tareas académicas y más. Todo integrado en un solo sistema operativo de vida.'
        },
        {
            icon: <Zap size={40} />,
            title: 'Diseño Cyberpunk',
            description: 'Interfaz táctica de alta tecnología. Una experiencia visual única que hace que la productividad se sienta épica.'
        },
        {
            icon: <Shield size={40} />,
            title: 'Datos Locales',
            description: 'Toda tu información se almacena localmente en tu dispositivo. Privacidad y control total sobre tus datos.'
        }
    ];

    const criticalSystems = [
        {
            title: 'Bóveda Principal (Finanzas)',
            description: 'Gestiona tus tarjetas, rastreacategorizados por etiquetas tácticamente asignadas. Cada transacción fortalece tu control económico.',
            image: finanzasImg,
            icon: <DollarSign size={32} />
        },
        {
            title: 'Panel de Atributos (RPG)',
            description: 'Visualiza tu balance de Fuerza, Intelecto, Vitalidad y Disciplina. Cada hábito completado incrementa tus estadísticas. Acumula medallas de guerra mediante rachas imparables.',
            image: rpgImg,
            icon: <Award size={32} />
        },
        {
            title: 'Modo Adulto',
            description: 'Gestión de obligaciones financieras adultas: servicios básicos, arriendo, internet y más. Mantén tu infraestructura vital operando sin interrupciones.',
            image: adultModeImg,
            icon: <TrendingUp size={32} />
        }
    ];

    const installSteps = [
        {
            icon: <Download size={32} />,
            title: 'Descarga el APK',
            description: 'Haz clic en el botón de descarga y guarda el archivo en tu dispositivo Android.'
        },
        {
            icon: <Settings size={32} />,
            title: 'Habilita Fuentes Desconocidas',
            description: 'Ve a Configuración → Seguridad → Habilita "Instalar aplicaciones desconocidas" para tu navegador o gestor de archivos.'
        },
        {
            icon: <Smartphone size={32} />,
            title: 'Instala CATO',
            description: 'Abre el archivo APK descargado y sigue las instrucciones para completar la instalación.'
        }
    ];

    const EXTERNAL_APK_LINK = '/api/download-cato';

    const handleDownload = () => {
        window.location.href = EXTERNAL_APK_LINK;
    };

    return (
        <div className="cato-page">

            {/* Sección Hero */}
            <Animation animation="fade-in">
                <section className="cato-hero">
                    <div className="cato-hero-content">
                        <div className="cato-badge">
                            <Smartphone size={20} />
                            <span>Nueva App Android</span>
                        </div>
                        <h1 className="cato-title">CATO: Tu Vida, Tu Sistema Operativo</h1>
                        <p className="cato-subtitle">
                            La aplicación de productividad definitiva. Gamifica tu vida, gestiona tus finanzas, construye hábitos imparables y convierte cada día en una misión épica.
                        </p>

                        <div className="cato-hero-actions">
                            <div className="cato-download-wrapper">
                                {/* Código QR para Google Play */}
                                <div className="cato-qr-section">
                                    <div className="cato-qr-badge">
                                        <span>Disponible en Google Play</span>
                                    </div>
                                    <img src={qrCodeImg} alt="QR Code para Google Play" className="cato-qr-image" />

                                    {/* Botón de Google Play */}
                                    <a
                                        href="https://play.google.com/store/apps/details?id=cl.synapsedev.cato"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="google-play-button"
                                    >
                                        <img src={googlePlayLogo} alt="Google Play" className="google-play-button-logo" />
                                        <div className="google-play-button-text">
                                            <span className="google-play-button-label">Descarga en</span>
                                            <span className="google-play-button-store">Google Play</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="cato-hero-image">
                        <div className="cato-phone-mockup">
                            <div className="phone-screen">
                                <img src={dashboardDark} alt="CATO Dashboard" className="dashboard-screenshot" />
                                <div className="screen-glow"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </Animation>

            {/* Sección de Características */}
            <div className="cato-section-light">
                <Animation animation="fade-up">
                    <section className="cato-features">
                        <h2>Un Sistema Operativo para Tu Vida</h2>
                        <p className="cato-features-subtitle">
                            CATO no es solo una app de tareas. Es un ecosistema completo diseñado para transformar cómo gestionas tu tiempo, dinero y objetivos.
                        </p>
                        <div className="cato-features-grid">
                            {features.map((feature, index) => (
                                <div key={index} className="cato-feature-card">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </Animation>
            </div>

            {/* Sistemas Críticos (Fondo Oscuro) */}
            <Animation animation="fade-up">
                <section className="cato-critical-systems">
                    <h2>Sistemas Críticos</h2>
                    <p className="cato-systems-subtitle">
                        Cada módulo de CATO ha sido diseñado como un sistema táctico para gestionar un aspecto crucial de tu vida.
                    </p>
                    <div className="cato-systems-grid">
                        {criticalSystems.map((system, index) => (
                            <div key={index} className="cato-system-card">
                                <div className="system-icon">{system.icon}</div>
                                <div className="system-content">
                                    <h3>{system.title}</h3>
                                    <p>{system.description}</p>
                                </div>
                                <div className="system-image">
                                    <img src={system.image} alt={system.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Animation>


            {/* Separador Visual */}
            <div className="cato-section-divider"></div>

            {/* Guía de Instalación */}
            <Animation animation="fade-up">
                <section className="cato-installation">
                    <h2>¿Cómo Instalar CATO?</h2>
                    <p className="cato-install-subtitle">
                        Sigue estos 3 pasos simples para comenzar tu viaje como el protagonista de tu propia vida.
                    </p>

                    {/* Aviso de Seguridad */}
                    <div className="cato-security-callout">
                        <Shield size={24} className="security-callout-icon" />
                        <div className="security-callout-text">
                            <h4>🔒 Seguridad Verificada</h4>
                            <p>
                                Este archivo se distribuye directamente desde los servidores de Synapse Dev.
                                Al ser una aplicación <strong>Local-First</strong>, garantizamos que el APK es 100% íntegro y que tus datos nunca saldrán de tu dispositivo.
                            </p>
                        </div>
                    </div>

                    <div className="cato-install-steps">
                        {installSteps.map((step, index) => (
                            <div key={index} className="cato-install-card">
                                <div className="install-number">{index + 1}</div>
                                <div className="install-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </Animation>

            {/* Nota de Seguridad */}
            <div className="cato-section-light">
                <Animation animation="fade-up">
                    <section className="cato-security">
                        <div className="security-content">
                            <AlertCircle size={48} className="security-icon" />
                            <div className="security-text">
                                <h3>Descarga Segura y Optimizada</h3>
                                <p>
                                    Para garantizar la máxima velocidad de descarga, el APK de CATO está alojado en un <strong>servidor externo de alto rendimiento</strong>.
                                    El archivo es 100% seguro, verificado y distribuido oficialmente por Synapse Dev.
                                </p>
                            </div>
                        </div>
                    </section>
                </Animation>
            </div>

            {/* CTA Final */}
            <Animation animation="fade-up">
                <section className="cato-cta-final">
                    <h2>¿Listo para Subir de Nivel?</h2>
                    <p>
                        Descarga CATO ahora y comienza a vivir como el protagonista que eres.
                        Cada día es una nueva misión. Cada logro te acerca a tu mejor versión.
                    </p>
                    <button onClick={handleDownload} className="cato-download-btn-secondary">
                        <Download size={24} />
                        Descargar CATO: LIFE OS
                    </button>
                    <div className="cato-stats">
                        <div className="stat-item">
                            <CheckCircle size={20} />
                            <span>100% Offline</span>
                        </div>
                        <div className="stat-item">
                            <CheckCircle size={20} />
                            <span>Sin Publicidad</span>
                        </div>
                        <div className="stat-item">
                            <CheckCircle size={20} />
                            <span>Gratis Forever</span>
                        </div>
                    </div>
                </section>
            </Animation>

        </div>
    );
};

export default Cato;
