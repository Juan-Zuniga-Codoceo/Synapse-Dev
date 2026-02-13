// frontend/src/pages/Cato/index.js
import React from 'react';
import './styles.css';
import Animation from '../../components/layout/Animation';
import {
    Zap,
    Target,
    Gamepad2,
    CheckCircle,
    Download,
    Shield,
    DollarSign,
    TrendingUp,
    Award,
    Settings,
    Smartphone,
    Home,
    BookOpen,
    Activity,
    Car,
    Dog,
    Users,
    CheckSquare,
    Briefcase,
    Heart,
    Calculator,
    User,
    Lock,
    Trophy,
    Brain,
    Sparkles,
    Clock,
    BarChart3,
    Rocket
} from 'lucide-react';

// Importar las imágenes de CATO
import dashboardDark from '../../img/Cato/Dashboard-Dark.png';
import finanzasImg from '../../img/Cato/Finanzas.png';
import rpgImg from '../../img/Cato/RPG.png';
import adultModeImg from '../../img/Cato/Adult Mode.png';
import qrCodeImg from '../../img/Cato/QR.png';
import googlePlayLogo from '../../img/Cato/Google Play PlayStore Logo.png';

const Cato = () => {


    // Los 15 módulos principales de CATO
    const modules = [
        {
            icon: <Home size={32} />,
            title: 'HOME',
            subtitle: 'Centro de Comando',
            description: 'Dashboard táctico que muestra prioridades del día, estadísticas clave y misiones secundarias aleatorias.'
        },
        {
            icon: <BookOpen size={32} />,
            title: 'ACADEMIC',
            subtitle: 'Gestión Académica',
            description: 'Gestión de asignaturas, exámenes, evaluaciones y tracking de promedios para estudiantes.'
        },
        {
            icon: <DollarSign size={32} />,
            title: 'FINANCE',
            subtitle: 'Bóveda Principal',
            description: 'Sistema financiero completo con billetera multi-tarjeta, transacciones, categorías y suscripciones.'
        },
        {
            icon: <Activity size={32} />,
            title: 'HABITS',
            subtitle: 'Sistema de Atributos',
            description: 'Construcción de hábitos con rachas, tracking de frecuencia y desarrollo de atributos personales.'
        },
        {
            icon: <Gamepad2 size={32} />,
            title: 'GAMIFICATION',
            subtitle: 'Motor de Recompensas',
            description: 'Sistema de XP, badges desbloqueables y recompensas personalizadas para mantener la motivación.'
        },
        {
            icon: <Car size={32} />,
            title: 'GARAGE',
            subtitle: 'Gestión Vehicular',
            description: 'Inventario de vehículos, historial de mantenimientos y documentación centralizada.'
        },
        {
            icon: <Dog size={32} />,
            title: 'PETS',
            subtitle: 'Comando de Mascotas',
            description: 'Perfiles de mascotas, historial médico, vacunas y tracking de gastos veterinarios.'
        },
        {
            icon: <Users size={32} />,
            title: 'SOCIAL',
            subtitle: 'Gestión de Relaciones',
            description: 'Network personal con cumpleaños, frecuencia de contacto e ideas de regalos.'
        },
        {
            icon: <CheckSquare size={32} />,
            title: 'TASKS',
            subtitle: 'Gestión Táctica',
            description: 'Sistema de tareas con vencimientos, priorización y misiones secundarias automáticas.'
        },
        {
            icon: <Briefcase size={32} />,
            title: 'RESPONSIBILITY',
            subtitle: 'Adult Mode',
            description: 'Tareas mensuales recurrentes con monitor de integridad del sistema y celebraciones épicas.'
        },
        {
            icon: <Heart size={32} />,
            title: 'LIFESTYLE',
            subtitle: 'LIFE OS',
            description: 'Bio-monitor de salud, calculadora de IMC, protocolos de estilo y cuidado de mascotas.'
        },
        {
            icon: <Calculator size={32} />,
            title: 'TOOLS',
            subtitle: 'Herramientas Financieras',
            description: 'Calculadoras de interés compuesto, conversor de divisas y payoff de deudas.'
        },
        {
            icon: <User size={32} />,
            title: 'PROFILE',
            subtitle: 'Perfil de Usuario',
            description: 'Avatar personalizable, estadísticas de progreso y configuración de preferencias.'
        },
        {
            icon: <Settings size={32} />,
            title: 'SETTINGS',
            subtitle: 'Configuración del Sistema',
            description: 'Modo oscuro/claro, notificaciones, gestión de datos y preferencias de módulos.'
        },
        {
            icon: <Lock size={32} />,
            title: 'AUTH',
            subtitle: 'Autenticación',
            description: 'Autenticación biométrica, pantalla de bloqueo y protección de datos sensibles.'
        }
    ];

    // Beneficios clave
    const benefits = [
        {
            icon: <Target size={32} />,
            title: 'Centralización Total',
            description: 'Una sola app para gestionar vida académica, finanzas, salud, vehículos, mascotas, relaciones y tareas. Elimina la necesidad de 10+ aplicaciones separadas.'
        },
        {
            icon: <Trophy size={32} />,
            title: 'Gamificación Profunda',
            description: 'Convertir responsabilidades en misiones. Sistema de XP, badges y recompensas genera adicción positiva con celebraciones visuales.'
        },
        {
            icon: <Brain size={32} />,
            title: 'Priorización Inteligente',
            description: 'El dashboard identifica automáticamente lo más urgente del día. No más olvidos de exámenes, cumpleaños o mantenimientos.'
        },
        {
            icon: <Briefcase size={32} />,
            title: 'Responsabilidad Adulta Sistematizada',
            description: 'El Adult Mode transforma tareas tediosas en un juego mensual con visualización del estado del sistema vital.'
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Desarrollo de Atributos',
            description: 'Hábitos vinculados a atributos (Disciplina, Físico, Mental, Social). Crecimiento cuantificable y visual.'
        },
        {
            icon: <DollarSign size={32} />,
            title: 'Control Financiero Real',
            description: 'Balance por tarjeta individual, tracking de deudas, categorías detalladas y herramientas de cálculo avanzadas.'
        },
        {
            icon: <Users size={32} />,
            title: 'Gestión de Relaciones Sociales',
            description: 'Sistema de frecuencia de contacto evita descuidar relaciones. Ideas de regalos documentadas y recordatorios de cumpleaños.'
        },
        {
            icon: <Shield size={32} />,
            title: 'Privacidad Total',
            description: 'Autenticación biométrica, datos almacenados localmente con Hive. Tus datos nunca salen del dispositivo.'
        },
        {
            icon: <Sparkles size={32} />,
            title: 'Estética Motivacional',
            description: 'Tema militar/táctico genera empoderamiento. Diseño premium con gradientes y efectos brillantes.'
        },
        {
            icon: <Rocket size={32} />,
            title: 'Transformación Cuantificable',
            description: 'Sistema escalable que crece con el usuario. Datos históricos valiosos para tomar decisiones.'
        }
    ];

    // Público objetivo
    const targetAudience = [
        {
            icon: <BookOpen size={32} />,
            title: 'Estudiantes Universitarios',
            age: '20-28 años',
            description: 'Gestión académica completa, control de finanzas limitadas, construcción de hábitos de estudio y primeras responsabilidades adultas.'
        },
        {
            icon: <Briefcase size={32} />,
            title: 'Jóvenes Profesionales',
            age: '25-35 años',
            description: 'Múltiples obligaciones financieras, vehículo propio, red social profesional en crecimiento y búsqueda de balance vida-trabajo.'
        },
        {
            icon: <Rocket size={32} />,
            title: 'Emprendedores',
            age: '25-40 años',
            description: 'Múltiples proyectos y tareas complejas, auto-motivación constante, tracking de crecimiento personal cuantificable.'
        },
        {
            icon: <Gamepad2 size={32} />,
            title: 'Tech Enthusiasts',
            age: '20-40 años',
            description: 'Aprecian gamificación profunda, resuenan con estética HUD/tactical y se motivan por progreso medible.'
        }
    ];

    // Impacto a largo plazo
    const longTermImpact = [
        {
            icon: <Clock size={32} />,
            period: 'En 1 Mes',
            achievements: [
                'Rachas de hábitos establecidas',
                'Finanzas clarificadas y bajo control',
                'Cero cumpleaños olvidados',
                'Adult Mode completado (sensación de logro)',
                'XP acumulado visible'
            ]
        },
        {
            icon: <TrendingUp size={32} />,
            period: 'En 6 Meses',
            achievements: [
                'Hábitos convertidos en automáticos',
                'Mejora financiera medible (menos deuda, más ahorro)',
                'Relaciones sociales notablemente más fuertes',
                'Identidad reforzada ("soy una persona disciplinada")',
                'Salud física mejorada por tracking consistente'
            ]
        },
        {
            icon: <Award size={32} />,
            period: 'En 1 Año',
            achievements: [
                'Transformación personal cuantificable',
                'Sistema de vida completamente optimizado',
                'Datos históricos valiosos para decisiones',
                'Red social sólida y bien mantenida',
                'Sensación de control total sobre la vida'
            ]
        }
    ];

    // Características técnicas
    const technicalFeatures = [
        { label: 'Plataformas', value: 'Android, iOS (Flutter)' },
        { label: 'Versión', value: '1.0.1+10' },
        { label: 'Package ID', value: 'cl.synapsedev.cato' },
        { label: 'Almacenamiento', value: 'Local (Hive NoSQL)' },
        { label: 'Requisitos', value: 'Android 5.0+, iOS 12.0+' },
        { label: 'Privacidad', value: '100% Local-First' }
    ];

    const criticalSystems = [
        {
            title: 'Bóveda Principal (Finanzas)',
            description: 'Gestiona tus tarjetas, rastrea gastos categorizados por etiquetas tácticamente asignadas. Cada transacción fortalece tu control económico.',
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
            title: 'Descarga desde Google Play',
            description: 'Escanea el código QR o haz clic en el botón para ir directamente a la tienda oficial de Google Play.'
        },
        {
            icon: <Smartphone size={32} />,
            title: 'Instala CATO',
            description: 'Presiona "Instalar" en Google Play y espera a que la aplicación se descargue e instale automáticamente.'
        },
        {
            icon: <Rocket size={32} />,
            title: 'Inicia tu Misión',
            description: 'Abre CATO, completa la configuración inicial y comienza a operar tu vida como un sistema táctico.'
        }
    ];



    return (
        <div className="cato-page">

            {/* Sección Hero */}
            <Animation animation="fade-in">
                <section className="cato-hero">
                    <div className="cato-hero-content">
                        <div className="cato-badge">
                            <Smartphone size={20} />
                            <span>Disponible en Google Play</span>
                        </div>
                        <h1 className="cato-title">CATO: LIFE OS</h1>
                        <p className="cato-subtitle">
                            El Sistema Operativo para tu Vida. Gamifica cada aspecto de tu existencia, gestiona finanzas con precisión militar,
                            construye hábitos imparables y convierte responsabilidades en misiones épicas.
                        </p>

                        <div className="cato-hero-actions">
                            <div className="cato-download-wrapper">
                                {/* Código QR para Google Play */}
                                <div className="cato-qr-section">
                                    <div className="cato-qr-badge">
                                        <span>Escanea para Descargar</span>
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

            {/* ¿Qué es CATO? */}
            <div className="cato-section-light">
                <Animation animation="fade-up">
                    <section className="cato-what-is">
                        <div className="section-header">
                            <h2>¿Qué es CATO?</h2>
                            <div className="header-line"></div>
                        </div>
                        <p className="cato-what-is-text">
                            <strong>CATO: LIFE OS</strong> (Command And Tactical Operations: Life Operating System) es una aplicación móvil integral
                            de gestión de vida diseñada específicamente para hombres modernos que buscan optimizar todos los aspectos de su existencia
                            personal, profesional y social.
                        </p>
                        <p className="cato-what-is-text">
                            CATO no es simplemente otra app de productividad o gestión de tareas. Es un <strong>sistema operativo completo para la vida</strong>,
                            que utiliza una estética militar/táctica y un enfoque de gamificación para transformar la gestión diaria en una <strong>misión estratégica</strong>.
                        </p>
                        <p className="cato-what-is-text">
                            La aplicación adopta una metáfora de "sistemas de comando" donde el usuario es el operador de su propia vida,
                            gestionando diferentes subsistemas (finanzas, salud, relaciones, responsabilidades) como si fuera el comandante de una operación táctica compleja.
                        </p>
                    </section>
                </Animation>
            </div>

            {/* Los 15 Módulos Principales */}
            <Animation animation="fade-up">
                <section className="cato-modules">
                    <div className="section-header">
                        <h2>15 Módulos de Comando</h2>
                        <div className="header-line"></div>
                    </div>
                    <p className="section-subtitle">
                        CATO integra 15 módulos principales que cubren todos los aspectos de la vida moderna,
                        transformando cada área en un sistema táctico optimizado.
                    </p>
                    <div className="cato-modules-grid">
                        {modules.map((module, index) => (
                            <div key={index} className="cato-module-card">
                                <div className="module-icon">{module.icon}</div>
                                <h3>{module.title}</h3>
                                <h4>{module.subtitle}</h4>
                                <p>{module.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </Animation>

            {/* Sistemas Críticos */}
            <Animation animation="fade-up">
                <section className="cato-critical-systems">
                    <div className="section-header">
                        <h2>Sistemas Críticos en Acción</h2>
                        <div className="header-line"></div>
                    </div>
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

            {/* Beneficios Clave */}
            <div className="cato-section-light">
                <Animation animation="fade-up">
                    <section className="cato-benefits">
                        <div className="section-header">
                            <h2>Beneficios Transformacionales</h2>
                            <div className="header-line"></div>
                        </div>
                        <p className="section-subtitle">
                            CATO entrega 10 beneficios clave que transforman radicalmente cómo gestionas tu vida diaria.
                        </p>
                        <div className="cato-benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="cato-benefit-card">
                                    <div className="benefit-icon">{benefit.icon}</div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </Animation>
            </div>

            {/* Público Objetivo */}
            <Animation animation="fade-up">
                <section className="cato-audience">
                    <div className="section-header">
                        <h2>Diseñado Para Operadores Modernos</h2>
                        <div className="header-line"></div>
                    </div>
                    <p className="section-subtitle">
                        CATO está diseñado específicamente para hombres de 20-40 años que valoran la productividad,
                        optimización personal y gamificación seria.
                    </p>
                    <div className="cato-audience-grid">
                        {targetAudience.map((audience, index) => (
                            <div key={index} className="cato-audience-card">
                                <div className="audience-icon">{audience.icon}</div>
                                <h3>{audience.title}</h3>
                                <div className="audience-age">{audience.age}</div>
                                <p>{audience.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </Animation>

            {/* Impacto a Largo Plazo */}
            <div className="cato-section-light">
                <Animation animation="fade-up">
                    <section className="cato-impact">
                        <div className="section-header">
                            <h2>Tu Evolución Táctica</h2>
                            <div className="header-line"></div>
                        </div>
                        <p className="section-subtitle">
                            Observa cómo CATO transforma tu vida en un sistema optimizado a lo largo del tiempo.
                        </p>
                        <div className="cato-impact-timeline">
                            {longTermImpact.map((impact, index) => (
                                <div key={index} className="cato-impact-card">
                                    <div className="impact-icon">{impact.icon}</div>
                                    <h3>{impact.period}</h3>
                                    <ul className="impact-list">
                                        {impact.achievements.map((achievement, idx) => (
                                            <li key={idx}>
                                                <CheckCircle size={18} />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </Animation>
            </div>

            {/* Información Técnica */}
            <Animation animation="fade-up">
                <section className="cato-technical">
                    <div className="section-header">
                        <h2>Especificaciones Técnicas</h2>
                        <div className="header-line"></div>
                    </div>
                    <div className="cato-technical-grid">
                        {technicalFeatures.map((feature, index) => (
                            <div key={index} className="cato-technical-item">
                                <div className="technical-label">{feature.label}</div>
                                <div className="technical-value">{feature.value}</div>
                            </div>
                        ))}
                    </div>
                    <div className="cato-tech-badges">
                        <div className="tech-badge">
                            <Shield size={20} />
                            <span>100% Privacy-First</span>
                        </div>
                        <div className="tech-badge">
                            <Zap size={20} />
                            <span>Flutter Powered</span>
                        </div>
                        <div className="tech-badge">
                            <Lock size={20} />
                            <span>Biometric Auth</span>
                        </div>
                    </div>
                </section>
            </Animation>

            {/* Propuesta de Valor */}
            <div className="cato-section-light">
                <Animation animation="fade-up">
                    <section className="cato-value-prop">
                        <div className="section-header">
                            <h2>Propuesta de Valor Única</h2>
                            <div className="header-line"></div>
                        </div>
                        <div className="cato-value-content">
                            <h3 className="value-tagline">
                                "Un Sistema Operativo Completo Para Tu Vida Con Estética Táctica Y Gamificación Profunda"
                            </h3>
                            <div className="value-grid">
                                <div className="value-item">
                                    <BarChart3 size={32} />
                                    <h4>Interconexión Total</h4>
                                    <p>Los módulos no están aislados. Recompensas se pagan con XP ganado en hábitos.
                                        Gastos de garage se categorizan en finanzas. Obligaciones financieras aparecen en Adult Mode.</p>
                                </div>
                                <div className="value-item">
                                    <Trophy size={32} />
                                    <h4>Gamificación No Superficial</h4>
                                    <p>Sistema de atributos, rachas, y recompensas comprables crea un loop de engagement genuino.
                                        No es solo "agregar puntos".</p>
                                </div>
                                <div className="value-item">
                                    <Shield size={32} />
                                    <h4>Específicamente Masculino</h4>
                                    <p>Estética militar/táctica, lenguaje técnico, y módulos (Garage, Exterior) resuenan con
                                        la psicología masculina moderna.</p>
                                </div>
                                <div className="value-item">
                                    <Sparkles size={32} />
                                    <h4>Responsabilidad = Juego</h4>
                                    <p>El Adult Mode convierte pagar cuentas en una misión épica mensual con celebraciones
                                        visuales al completar el 100%.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Animation>
            </div>

            {/* Separador Visual */}
            <div className="cato-section-divider"></div>

            {/* Guía de Instalación */}
            <Animation animation="fade-up">
                <section className="cato-installation">
                    <div className="section-header">
                        <h2>Protocolo de Instalación</h2>
                        <div className="header-line"></div>
                    </div>
                    <p className="cato-install-subtitle">
                        Sigue estos 3 pasos simples para comenzar tu viaje como el operador de tu propia vida.
                    </p>

                    {/* Aviso de Seguridad */}
                    <div className="cato-security-callout">
                        <Shield size={24} className="security-callout-icon" />
                        <div className="security-callout-text">
                            <h4>🔒 Seguridad Verificada</h4>
                            <p>
                                Aplicación oficial disponible en Google Play Store.
                                Al ser una aplicación <strong>Local-First</strong>, garantizamos que tus datos nunca saldrán de tu dispositivo.
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

            {/* CTA Final */}
            <Animation animation="fade-up">
                <section className="cato-cta-final">
                    <h2>¿Listo para Iniciar la Operación?</h2>
                    <p>
                        Descarga CATO ahora y comienza a vivir como el protagonista que eres.
                        Cada día es una nueva misión. Cada logro te acerca a tu mejor versión.
                    </p>
                    <a
                        href="https://play.google.com/store/apps/details?id=cl.synapsedev.cato"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cato-download-btn-secondary"
                    >
                        <Download size={24} />
                        Descargar CATO: LIFE OS
                    </a>
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
                    <div className="cato-footer-tagline">
                        <p>"Porque tu vida merece un sistema operativo de nivel militar."</p>
                        <p className="footer-dev">— Desarrollado por <strong>SynapseDev</strong></p>
                    </div>
                </section>
            </Animation>

        </div>
    );
};

export default Cato;
