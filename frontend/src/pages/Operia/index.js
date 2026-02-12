// frontend/src/pages/Operia/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Animation from '../../components/layout/Animation';
import operiaHero from '../../assets/images/operia/operia-hero.png';

// Iconos de lucide-react
import {
  Trello, Users, Truck, MessageSquare, FileText, Settings,
  Eye, Zap, FileCheck, Link2, DollarSign, Database, TrendingUp,
  CheckCircle2, Shield, Lock, Server, Code, Smartphone
} from 'lucide-react';

const Operia = () => {
  return (
    <div className="operia-page">

      {/* 1. SECCIÓN HÉROE */}
      <Animation animation="fade-in">
        <section className="operia-hero">
          <div className="operia-hero-content">
            <h1 className="operia-title">Centraliza la operación de tu equipo</h1>
            <p className="operia-subtitle">
              Operia es una plataforma integral de gestión de tareas y colaboración empresarial que centraliza todo el flujo de trabajo operativo en un sistema visual e intuitivo. Transforma la complejidad operativa en un tablero Kanban claro y accesible.
            </p>
            <div className="operia-hero-buttons">
              <a href="https://operia.onrender.com" target="_blank" rel="noopener noreferrer" className="operia-cta-primary">
                Probar Demo en Vivo
              </a>
              <a href="#modules" className="operia-cta-secondary-hero">
                Ver Características
              </a>
            </div>
          </div>
          <div className="operia-hero-image">
            <img src={operiaHero} alt="Dashboard de Operia" />
          </div>
        </section>
      </Animation>

      {/* 2. ¿QUÉ ES OPERIA? */}
      <div className="operia-section-light">
        <Animation animation="fade-up">
          <section className="operia-what-is">
            <h2>¿Qué es Operia?</h2>
            <p className="operia-intro-text">
              Operia es un Sistema de Gestión Operativa completo que combina todo lo que tu equipo necesita en una sola plataforma:
            </p>
            <div className="operia-capabilities-grid">
              <div className="capability-item">
                <Trello className="capability-icon" />
                <p>Gestión visual de tareas mediante tableros Kanban</p>
              </div>
              <div className="capability-item">
                <Users className="capability-icon" />
                <p>Seguimiento de clientes con datos estructurados</p>
              </div>
              <div className="capability-item">
                <MessageSquare className="capability-icon" />
                <p>Colaboración en tiempo real entre equipos</p>
              </div>
              <div className="capability-item">
                <FileText className="capability-icon" />
                <p>Biblioteca de documentos técnicos para productos</p>
              </div>
              <div className="capability-item">
                <Truck className="capability-icon" />
                <p>Gestión de entregas y logística con múltiples couriers</p>
              </div>
              <div className="capability-item">
                <Settings className="capability-icon" />
                <p>Control de responsabilidades con roles diferenciados</p>
              </div>
            </div>
          </section>
        </Animation>
      </div>

      {/* 3. MÓDULOS PRINCIPALES */}
      <div id="modules" className="operia-section-dark">
        <Animation animation="fade-up">
          <section className="operia-modules">
            <h2>Módulos Principales</h2>
            <p className="section-subtitle">Seis sistemas integrados para una operación perfecta</p>

            <div className="operia-modules-grid">
              {/* Módulo 1 */}
              <div className="module-card">
                <div className="module-icon-wrapper">
                  <Trello size={40} className="module-icon" />
                </div>
                <h3>Sistema Kanban Inteligente</h3>
                <ul className="module-features">
                  <li>Tablero visual con 3 columnas: Pendientes, En Camino, Completadas</li>
                  <li>Código único autogenerado para cada tarea (ej: BV-0045, BQ-0123)</li>
                  <li>Priorización automática por urgencia y fecha</li>
                  <li>Archivado inteligente tras 2 días de completadas</li>
                </ul>
              </div>

              {/* Módulo 2 */}
              <div className="module-card">
                <div className="module-icon-wrapper">
                  <Users size={40} className="module-icon" />
                </div>
                <h3>Gestión de Clientes Frecuentes</h3>
                <ul className="module-features">
                  <li>Base de datos de clientes con RUT, contactos y direcciones</li>
                  <li>Autocompletado al crear tareas para clientes recurrentes</li>
                  <li>Snapshot del cliente en cada tarea para trazabilidad histórica</li>
                  <li>Integración con Google Maps para direcciones</li>
                </ul>
              </div>

              {/* Módulo 3 */}
              <div className="module-card">
                <div className="module-icon-wrapper">
                  <Truck size={40} className="module-icon" />
                </div>
                <h3>Control Logístico</h3>
                <ul className="module-features">
                  <li>Seguimiento de origen (Valparaíso, Quilpué, Viña del Mar, Bodega)</li>
                  <li>Gestión de couriers (Starken, BlueExpress, Chilexpress, etc.)</li>
                  <li>Estado de pago (Pagado/Por Pagar)</li>
                  <li>Generación de etiquetas de envío internas y para courier</li>
                </ul>
              </div>

              {/* Módulo 4 */}
              <div className="module-card">
                <div className="module-icon-wrapper">
                  <MessageSquare size={40} className="module-icon" />
                </div>
                <h3>Colaboración Avanzada</h3>
                <ul className="module-features">
                  <li>Sistema de comentarios con menciones (@usuario)</li>
                  <li>Adjuntos en tareas y comentarios (documentos, imágenes, PDFs)</li>
                  <li>Notificaciones en tiempo real vía WebSocket</li>
                  <li>Resúmenes diarios automáticos por email</li>
                </ul>
              </div>

              {/* Módulo 5 */}
              <div className="module-card">
                <div className="module-icon-wrapper">
                  <FileText size={40} className="module-icon" />
                </div>
                <h3>Biblioteca de Fichas Técnicas</h3>
                <ul className="module-features">
                  <li>Repositorio centralizado de PDFs de productos</li>
                  <li>Categorización y búsqueda avanzada</li>
                  <li>Vista previa integrada de documentos</li>
                  <li>Control de versiones</li>
                </ul>
              </div>

              {/* Módulo 6 */}
              <div className="module-card">
                <div className="module-icon-wrapper">
                  <Settings size={40} className="module-icon" />
                </div>
                <h3>Panel de Administración</h3>
                <ul className="module-features">
                  <li>Gestión completa de usuarios y roles</li>
                  <li>Control de permisos y accesos</li>
                  <li>Auditoría de actividades</li>
                  <li>Configuración del sistema</li>
                </ul>
              </div>
            </div>
          </section>
        </Animation>
      </div>

      {/* 4. CLIENTE OBJETIVO */}
      <div className="operia-section-light">
        <Animation animation="fade-up">
          <section className="operia-target-client">
            <h2>¿Para quién es Operia?</h2>
            <p className="section-subtitle">Diseñada para empresas que necesitan orden y eficiencia operativa</p>

            <div className="target-profile">
              <h3>Perfil Ideal</h3>
              <p>Operia está diseñada para empresas de distribución, logística y comercio que:</p>
              <div className="profile-checklist">
                <div className="check-item"><CheckCircle2 size={20} /> Manejan múltiples pedidos diarios con diferentes clientes</div>
                <div className="check-item"><CheckCircle2 size={20} /> Tienen equipos de 3-50 personas que necesitan coordinarse</div>
                <div className="check-item"><CheckCircle2 size={20} /> Requieren trazabilidad completa de cada operación</div>
                <div className="check-item"><CheckCircle2 size={20} /> Trabajan con múltiples couriers o métodos de entrega</div>
                <div className="check-item"><CheckCircle2 size={20} /> Necesitan documentación técnica accesible al equipo</div>
                <div className="check-item"><CheckCircle2 size={20} /> Valoran la comunicación clara sobre el estado de cada tarea</div>
              </div>
            </div>

            <h3 className="use-cases-title">Casos de Uso Principales</h3>
            <div className="use-cases-grid">
              <div className="use-case-card">
                <h4>Distribuidoras y Comerciales</h4>
                <p>Track de pedidos desde recepción hasta entrega. Coordinación entre bodegas y puntos de venta.</p>
              </div>
              <div className="use-case-card">
                <h4>Empresas de Logística</h4>
                <p>Control de entregas con múltiples transportistas. Estados de pago y comprobantes.</p>
              </div>
              <div className="use-case-card">
                <h4>Importadoras</h4>
                <p>Gestión de pedidos especiales. Fichas técnicas de productos importados.</p>
              </div>
              <div className="use-case-card">
                <h4>Service Desk</h4>
                <p>Tickets de soporte convertidos en tareas. Historial de comunicación por ticket.</p>
              </div>
              <div className="use-case-card">
                <h4>Servicios Profesionales</h4>
                <p>Proyectos con múltiples entregables. Seguimiento de deadlines y responsables.</p>
              </div>
            </div>
          </section>
        </Animation>
      </div>

      {/* 5. BENEFICIOS CLAVE */}
      <div className="operia-section-dark">
        <Animation animation="fade-up">
          <section className="operia-benefits">
            <h2>Beneficios Clave</h2>
            <p className="section-subtitle">Transforma la complejidad en claridad</p>

            <div className="benefits-grid">
              <div className="benefit-card">
                <Eye size={36} className="benefit-icon" />
                <h3>Visibilidad Total</h3>
                <p>Tablero en tiempo real. Todo el equipo ve instantáneamente el estado actual sin reuniones innecesarias.</p>
              </div>

              <div className="benefit-card">
                <Zap size={36} className="benefit-icon" />
                <h3>Eficiencia Operativa</h3>
                <p>Reducción de errores con datos estructurados. Búsqueda instantánea por ID, cliente o fecha.</p>
              </div>

              <div className="benefit-card">
                <FileCheck size={36} className="benefit-icon" />
                <h3>Trazabilidad Completa</h3>
                <p>Historial inmutable. Cada tarea guarda quién la creó, modificó y completó con timestamps.</p>
              </div>

              <div className="benefit-card">
                <Link2 size={36} className="benefit-icon" />
                <h3>Coordinación Sin Fricciones</h3>
                <p>Roles claros en cada tarea. Menciones directas y actualizaciones en vivo vía WebSocket.</p>
              </div>

              <div className="benefit-card">
                <DollarSign size={36} className="benefit-icon" />
                <h3>Reducción de Costos</h3>
                <p>Sin licencias por usuario. Despliegue propio, costos fijos. Sin límites artificiales.</p>
              </div>

              <div className="benefit-card">
                <Database size={36} className="benefit-icon" />
                <h3>Información Centralizada</h3>
                <p>Fichas técnicas, base de datos de clientes y etiquetas de envío en un solo lugar.</p>
              </div>

              <div className="benefit-card">
                <TrendingUp size={36} className="benefit-icon" />
                <h3>Escalabilidad</h3>
                <p>Añade usuarios sin costos adicionales. Deploy en la nube o local con API extensible.</p>
              </div>
            </div>
          </section>
        </Animation>
      </div>

      {/* 6. ROI - RETORNO DE INVERSIÓN */}
      <div className="operia-section-light">
        <Animation animation="fade-up">
          <section className="operia-roi">
            <h2>Retorno de Inversión Comprobado</h2>
            <p className="section-subtitle">Ahorro tangible desde el primer mes</p>

            <div className="roi-container">
              <div className="roi-table-wrapper">
                <h3>Tiempo Ahorrado por Actividad</h3>
                <table className="roi-table">
                  <thead>
                    <tr>
                      <th>Actividad</th>
                      <th>Antes</th>
                      <th>Con Operia</th>
                      <th className="highlight">Ahorro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Buscar estado de un pedido</td>
                      <td>5-10 min</td>
                      <td>10 seg</td>
                      <td className="highlight">95%</td>
                    </tr>
                    <tr>
                      <td>Coordinar con el equipo</td>
                      <td>Reunión 30 min</td>
                      <td>Mención instantánea</td>
                      <td className="highlight">100%</td>
                    </tr>
                    <tr>
                      <td>Generar reporte de pendientes</td>
                      <td>20 min manual</td>
                      <td>Automático</td>
                      <td className="highlight">100%</td>
                    </tr>
                    <tr>
                      <td>Encontrar ficha técnica</td>
                      <td>3-5 min</td>
                      <td>15 seg</td>
                      <td className="highlight">92%</td>
                    </tr>
                    <tr>
                      <td>Notificar vencimientos</td>
                      <td>Manual o no se hace</td>
                      <td>Automático</td>
                      <td className="highlight">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="roi-savings">
                <h3>Estimación Conservadora para Equipo de 5 Personas</h3>
                <div className="savings-metrics">
                  <div className="metric">
                    <div className="metric-value">30 min</div>
                    <div className="metric-label">Ahorro diario por persona</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">75 horas</div>
                    <div className="metric-label">Ahorro mensual del equipo</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">$1,125</div>
                    <div className="metric-label">Valor monetario mensual (a $15/hora)</div>
                  </div>
                </div>

                <div className="costs-avoided">
                  <h4>Costos Evitados</h4>
                  <p><strong>Sin licencias SaaS recurrentes:</strong> Competencia típica $40-80/usuario/mes</p>
                  <p><strong>Para 5 usuarios:</strong> $200-400 USD/mes ahorrados</p>
                  <p className="annual-savings"><strong>Ahorro anual:</strong> $2,400-4,800 USD</p>
                </div>
              </div>
            </div>
          </section>
        </Animation>
      </div>

      {/* 7. COMPARACIÓN COMPETITIVA */}
      <div className="operia-section-dark">
        <Animation animation="fade-up">
          <section className="operia-comparison">
            <h2>¿Por Qué Elegir Operia?</h2>
            <p className="section-subtitle">Ventajas competitivas claras</p>

            <div className="comparison-grid">
              <div className="comparison-card">
                <h3>vs. Trello / Asana</h3>
                <ul className="comparison-list">
                  <li><CheckCircle2 size={18} /> Incluye gestión de clientes integrada</li>
                  <li><CheckCircle2 size={18} /> Sin límite de usuarios</li>
                  <li><CheckCircle2 size={18} /> Datos locales y privados</li>
                  <li><CheckCircle2 size={18} /> Fichas técnicas integradas</li>
                  <li><CheckCircle2 size={18} /> WebSocket propio sin dependencias</li>
                </ul>
              </div>

              <div className="comparison-card">
                <h3>vs. Excel / Google Sheets</h3>
                <ul className="comparison-list">
                  <li><CheckCircle2 size={18} /> Notificaciones automáticas</li>
                  <li><CheckCircle2 size={18} /> Concurrencia sin conflictos</li>
                  <li><CheckCircle2 size={18} /> Historial completo e inmutable</li>
                  <li><CheckCircle2 size={18} /> Adjuntos vinculados directamente</li>
                  <li><CheckCircle2 size={18} /> Interfaz visual intuitiva</li>
                </ul>
              </div>

              <div className="comparison-card">
                <h3>vs. Software Personalizado</h3>
                <ul className="comparison-list">
                  <li><CheckCircle2 size={18} /> Costo inicial mucho menor</li>
                  <li><CheckCircle2 size={18} /> Mantenimiento incluido</li>
                  <li><CheckCircle2 size={18} /> Deploy en días, no meses</li>
                  <li><CheckCircle2 size={18} /> Código abierto (evita vendor lock-in)</li>
                  <li><CheckCircle2 size={18} /> Updates y mejoras continuas</li>
                </ul>
              </div>
            </div>
          </section>
        </Animation>
      </div>

      {/* 8. SEGURIDAD Y TECNOLOGÍA */}
      <div className="operia-section-light">
        <Animation animation="fade-up">
          <section className="operia-tech">
            <h2>Tecnología Robusta y Segura</h2>

            <div className="tech-grid">
              <div className="tech-column">
                <div className="tech-header">
                  <Shield size={32} className="tech-header-icon" />
                  <h3>Seguridad y Privacidad</h3>
                </div>
                <ul className="tech-list">
                  <li><Lock size={18} /> Autenticación JWT con tokens seguros</li>
                  <li><Lock size={18} /> Contraseñas encriptadas con bcrypt</li>
                  <li><Lock size={18} /> HTTPS obligatorio</li>
                  <li><Lock size={18} /> Permisos granulares por rol</li>
                  <li><Lock size={18} /> Datos propios: tu servidor, tu control</li>
                  <li><Lock size={18} /> Sin tracking externo</li>
                </ul>
              </div>

              <div className="tech-column">
                <div className="tech-header">
                  <Server size={32} className="tech-header-icon" />
                  <h3>Backend Sólido</h3>
                </div>
                <ul className="tech-list">
                  <li><Code size={18} /> Node.js + Express escalable</li>
                  <li><Code size={18} /> SQLite con base de datos embebida</li>
                  <li><Code size={18} /> WebSocket nativo para tiempo real</li>
                  <li><Code size={18} /> Cron jobs para automatización</li>
                </ul>
              </div>

              <div className="tech-column">
                <div className="tech-header">
                  <Smartphone size={32} className="tech-header-icon" />
                  <h3>Frontend Responsivo</h3>
                </div>
                <ul className="tech-list">
                  <li><Code size={18} /> Vue.js 3 reactivo y moderno</li>
                  <li><Code size={18} /> Sin build complejo (CDN global)</li>
                  <li><Code size={18} /> PWA-ready (instalable como app)</li>
                  <li><Code size={18} /> Deploy flexible: Cloud o Local</li>
                </ul>
              </div>
            </div>
          </section>
        </Animation>
      </div>

      {/* 9. PRUEBA SOCIAL - BiocareTask */}
      <div className="operia-section-dark">
        <Animation animation="fade-up">
          <section className="operia-proof">
            <div className="operia-proof-content">
              <h2>Confianza Comprobada: El Caso de BiocareTask</h2>
              <p>
                BiocareTask, una solución personalizada basada en la arquitectura de Operia, gestiona actualmente las operaciones logísticas y de servicio técnico para un equipo activo, demostrando la estabilidad y escalabilidad de nuestro desarrollo.
              </p>
              <div className="proof-metrics">
                <div className="proof-metric">
                  <div className="proof-value">100+</div>
                  <div className="proof-label">Tareas gestionadas mensualmente</div>
                </div>
                <div className="proof-metric">
                  <div className="proof-value">24/7</div>
                  <div className="proof-label">Disponibilidad del sistema</div>
                </div>
                <div className="proof-metric">
                  <div className="proof-value">0</div>
                  <div className="proof-label">Pérdidas de datos</div>
                </div>
              </div>
              <Link to="/portfolio" className="operia-cta-secondary">
                Ver más casos de éxito
              </Link>
            </div>
          </section>
        </Animation>
      </div>

      {/* 10. SECCIÓN PIVOTE - Personalización */}
      <div className="operia-section-light">
        <Animation animation="fade-up">
          <section className="operia-pivot">
            <h2>¿Te gusta Operia? Lo adaptamos 100% a tu negocio</h2>
            <p className="operia-pivot-text">
              Operia es la base de nuestra solución. Lo personalizamos para que se adapte perfectamente a los procesos únicos de tu empresa.
            </p>

            <div className="operia-pivot-grid">
              <div className="pivot-card">
                <Settings size={40} className="pivot-icon" />
                <h3>Campos a Medida</h3>
                <p>¿Necesitas un campo para "Patente", "N° de Orden" o "Centro de Costo"? Lo añadimos por ti.</p>
              </div>
              <div className="pivot-card">
                <Link2 size={40} className="pivot-icon" />
                <h3>Lógica de Negocio</h3>
                <p>Implementamos flujos de aprobación, roles de usuario personalizados y permisos especiales.</p>
              </div>
              <div className="pivot-card">
                <Eye size={40} className="pivot-icon" />
                <h3>Branding Personalizado</h3>
                <p>Ponemos tu logo, tus colores y tu tipografía. Hacemos que Operia se sienta 100% tuyo.</p>
              </div>
            </div>

            <p className="operia-pivot-key">
              En Synapse Dev, no vendemos software enlatado. Creamos la herramienta que tu equipo realmente necesita.
            </p>
          </section>
        </Animation>
      </div>

      {/* 11. CTA FINAL */}
      <div className="operia-section-dark">
        <Animation animation="fade-up">
          <section className="operia-cta-final">
            <h2>¿Listo para digitalizar tu operación?</h2>
            <p>
              Agenda una demostración gratuita y sin compromiso de Operia, y conversemos sobre cómo podemos construir la solución que tu empresa realmente necesita.
            </p>
            <Link to="/contact" className="operia-cta-primary">
              Agendar un Demo
            </Link>
          </section>
        </Animation>
      </div>

    </div>
  );
};

export default Operia;