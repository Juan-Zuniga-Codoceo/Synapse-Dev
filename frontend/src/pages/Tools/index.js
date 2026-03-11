import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Animation from '../../components/layout/Animation';
import { Copy, UploadCloud, Download, CheckCircle, Smartphone, ShieldCheck, Calculator, ArrowRight, Activity, AlertTriangle } from 'lucide-react';
import './styles.css';

const Tools = () => {
  // --- SEO Loop ---
  useEffect(() => {
    document.title = "Herramientas Gratuitas para Emprendedores en Chile | SynapseDev";
  }, []);

  // --- Analytics Tracking ---
  const trackToolUsage = (toolName) => {
    console.log(`[Analytics] Herramienta usada: ${toolName}`);
  };

  // --- WhatsApp Generator State ---
  const [waNumber, setWaNumber] = useState('');
  const [waMessage, setWaMessage] = useState('');
  const [waLink, setWaLink] = useState('');
  const [waCopied, setWaCopied] = useState(false);

  // --- WebP Optimizer State ---
  const [isObjectDragging, setIsObjectDragging] = useState(false);
  const [webpFileUrl, setWebpFileUrl] = useState(null);
  const [webpFileName, setWebpFileName] = useState('');
  const fileInputRef = useRef(null);

  // --- Privacy Policy Generator State ---
  const [ppCompany, setPpCompany] = useState('');
  const [ppRut, setPpRut] = useState('');
  const [ppWebsite, setPpWebsite] = useState('');
  const [ppText, setPpText] = useState('');
  const [ppCopied, setPpCopied] = useState(false);

  // --- Efficiency Calculator State ---
  const [effTasks, setEffTasks] = useState('');
  const [effMinutes, setEffMinutes] = useState('');

  // --- Speed Analyzer State ---
  const [psUrl, setPsUrl] = useState('');
  const [psLoading, setPsLoading] = useState(false);
  const [psResult, setPsResult] = useState(null);
  const [psError, setPsError] = useState('');

  // --- WhatsApp Gen Logic ---
  const handleGenerateWaLink = (e) => {
    e.preventDefault();
    if (!waNumber) return;
    const cleanNumber = waNumber.replace(/\D/g, ''); // Remove non-digits
    const encodedMessage = encodeURIComponent(waMessage);
    const link = `https://wa.me/${cleanNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
    setWaLink(link);
    setWaCopied(false);
  };

  const handleCopyWaLink = () => {
    if (!waLink) return;
    navigator.clipboard.writeText(waLink).then(() => {
      setWaCopied(true);
      trackToolUsage('Generador de WhatsApp');
      setTimeout(() => setWaCopied(false), 2000);
    });
  };

  // --- WebP Optimizer Logic ---
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsObjectDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsObjectDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const processImageToWebp = (file) => {
    if (!file || !file.type.match(/image\/(jpeg|png)/)) {
      alert('Por favor sube una imagen JPG o PNG.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const dataUrl = canvas.toDataURL('image/webp', 0.8); // 80% quality
        setWebpFileUrl(dataUrl);

        // Generate a new name replacing extension
        const originalNameParts = file.name.split('.');
        originalNameParts.pop(); // Remove extension
        setWebpFileName(`${originalNameParts.join('.')}_optimizado.webp`);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsObjectDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processImageToWebp(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processImageToWebp(e.target.files[0]);
    }
  };

  // --- Privacy Policy Gen Logic ---
  const handleGeneratePrivacyPolicy = (e) => {
    e.preventDefault();
    if (!ppCompany || !ppRut || !ppWebsite) return;

    const dateStr = new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' });

    const policyText = `Políticas de Privacidad de ${ppCompany}\n\nFecha de última actualización: ${dateStr}\n\nDe conformidad con lo dispuesto en la Ley Nº 19.628 sobre Protección de la Vida Privada de Chile, ${ppCompany} (RUT: ${ppRut}), en adelante "la Empresa", establece la presente Política de Privacidad para el sitio web ${ppWebsite}.\n\n1. RECOPILACIÓN DE DATOS RECOGIDOS\nLa Empresa recopila datos personales que el usuario proporciona de forma voluntaria al utilizar nuestros formularios de contacto, suscripción o compra en el sitio web ${ppWebsite}. Estos datos pueden incluir, pero no se limitan a: nombre, correo electrónico y número de teléfono.\n\n2. FINALIDAD DEL TRATAMIENTO DE LOS DATOS\nLos datos personales proporcionados serán utilizados exclusivamente para los siguientes fines:\n- Responder a consultas o requerimientos solicitados por el usuario.\n- Proveer los servicios y productos ofrecidos.\n- Enviar información comercial o promocional, siempre que el usuario haya consentido previamente.\n\n3. CONSENTIMIENTO Y DERECHOS ARCO\nAl proporcionar sus datos, el usuario autoriza expresamente a la Empresa para el tratamiento de su información personal. En todo momento, el titular de los datos podrá ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO) establecidos en la Ley 19.628, enviando una solicitud formal a través de los canales de contacto de nuestro sitio web.\n\n4. COMUNICACIÓN A TERCEROS\nLa Empresa garantiza que los datos personales no serán vendidos, cedidos ni distribuidos a terceros sin el consentimiento expreso del usuario, salvo obligación legal o en los casos expresamente permitidos por la ley.\n\n5. SEGURIDAD DE LA INFORMACIÓN\nLa Empresa adoptará todas las medidas de seguridad técnicas y organizativas necesarias para proteger la confidencialidad, integridad y disponibilidad de los datos personales.\n\n6. MODIFICACIONES A LA POLÍTICA\nLa Empresa se reserva el derecho de modificar esta Política de Privacidad de acuerdo a cambios legislativos o nuevas políticas internas. Cualquier modificación será publicada en esta misma página.`;

    setPpText(policyText);
    setPpCopied(false);
  };

  const handleCopyPrivacyPolicy = () => {
    if (!ppText) return;
    navigator.clipboard.writeText(ppText).then(() => {
      setPpCopied(true);
      trackToolUsage('Generador de Políticas de Privacidad');
      setTimeout(() => setPpCopied(false), 2000);
    });
  };

  const handleDownloadPrivacyPolicy = () => {
    if (!ppText) return;
    const blob = new Blob([ppText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `politicas_de_privacidad_${ppCompany.replace(/\s+/g, '_').toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    trackToolUsage('Descargar Políticas de Privacidad');
  };

  // --- Efficiency Calculator Logic ---
  const calculateEfficiency = () => {
    const tasks = parseInt(effTasks) || 0;
    const minutes = parseInt(effMinutes) || 0;
    const hoursPerMonth = (tasks * minutes * 20) / 60;
    return hoursPerMonth.toFixed(1);
  };

  // --- Speed Analyzer Logic ---
  const handleAnalyzeSpeed = async (e) => {
    e.preventDefault();
    if (!psUrl) return;

    let targetUrl = psUrl.trim();
    if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = 'https://' + targetUrl;
    }

    setPsLoading(true);
    setPsError('');
    setPsResult(null);

    try {
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&category=performance`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || 'Error al analizar el sitio');
      }

      const lighthouse = data.lighthouseResult;
      if (!lighthouse || !lighthouse.categories || !lighthouse.categories.performance) {
        throw new Error('No se pudieron obtener los resultados de rendimiento.');
      }

      const score = Math.round(lighthouse.categories.performance.score * 100);
      const lcp = lighthouse.audits['largest-contentful-paint']?.displayValue || 'N/A';
      const tti = lighthouse.audits['interactive']?.displayValue || 'N/A';
      const speedIndex = lighthouse.audits['speed-index']?.displayValue || 'N/A';

      setPsResult({ score, lcp, tti, speedIndex, url: targetUrl });
      trackToolUsage('Analizador de Velocidad');
    } catch (err) {
      console.error(err);
      setPsError('Hubo un error al analizar la URL. Asegúrate de que el sitio sea público y válido.');
    } finally {
      setPsLoading(false);
    }
  };

  return (
    <div className="tools-page">
      <Navbar />

      <main className="tools-main">
        <Animation animation="fade-up">
          <div className="tools-header">
            <h1 className="tools-title">
              Herramientas Gratuitas para <span className="text-accent">Emprendedores</span>
            </h1>
            <p className="tools-description">
              Potencia tu negocio con estas utilidades diseñadas para ahorrarte tiempo y mejorar la experiencia de tus clientes.
            </p>
          </div>
        </Animation>

        <div className="tools-grid">

          {/* Speed Analyzer Card (Featured) */}
          <Animation animation="fade-up" delay={100}>
            <div className="tool-card tool-card-featured">
              <div className="tool-card-header">
                <div className="icon-wrapper">
                  <Activity />
                </div>
                <h2 className="tool-title">Analizador de Velocidad Web</h2>
              </div>
              <p className="tool-description">
                Descubre qué tan rápido carga tu sitio web y si cumple con los estándares de rendimiento de Google.
              </p>

              <form onSubmit={handleAnalyzeSpeed} className="wa-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="ps-url">URL de tu sitio web</label>
                  <input
                    id="ps-url"
                    type="text"
                    placeholder="Ej: synapsedev.cl"
                    value={psUrl}
                    onChange={(e) => setPsUrl(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary" disabled={psLoading}>
                  {psLoading ? (
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <span className="spinner"></span> Analizando métricas...
                    </span>
                  ) : "Analizar ahora"}
                </button>
              </form>

              {psError && (
                <div className="mt-4 p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-200 text-sm" style={{ marginTop: '16px', backgroundColor: 'rgba(127, 29, 29, 0.3)', border: '1px solid rgba(153, 27, 27, 0.5)', borderRadius: '0.5rem', padding: '12px', color: '#fecaca', fontSize: '0.875rem' }}>
                  <AlertTriangle style={{ display: 'inline', width: '16px', height: '16px', marginRight: '4px' }} /> {psError}
                </div>
              )}

              {psResult && (
                <div className="result-box mt-4" style={{ marginTop: '16px' }}>
                  <div className="speed-score-container">
                    <div className={`score-circle ${psResult.score >= 90 ? 'score-green' : (psResult.score >= 50 ? 'score-orange' : 'score-red')}`}>
                      {psResult.score}
                    </div>
                    <div className="speed-metrics">
                      <div className="metric-item">
                        <span className="metric-label">LCP</span>
                        <span className="metric-value">{psResult.lcp}</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-label">TTI</span>
                        <span className="metric-value">{psResult.tti}</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-label">Speed Index</span>
                        <span className="metric-value">{psResult.speedIndex}</span>
                      </div>
                    </div>
                  </div>

                  {psResult.score < 90 && (
                    <div className="speed-warning">
                      <AlertTriangle className="warning-icon" />
                      <div>
                        <p className="warning-text">
                          <strong>Tu sitio no cumple con los estándares de Google.</strong>
                        </p>
                        <p className="warning-subtext">
                          Esto afecta directamente tu ranking SEO y tus ventas.
                        </p>
                      </div>
                      <Link
                        to={`/contact?subject=Optimización de Velocidad para ${encodeURIComponent(psResult.url)}`}
                        className="btn-solid btn-solid-large"
                        style={{ backgroundColor: '#ef4444', marginTop: '16px', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}
                        onClick={() => trackToolUsage('Analizador de Velocidad - CTA Arreglar')}
                      >
                        Arreglar mi velocidad
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Animation>

          {/* WhatsApp Generator Card */}
          <Animation animation="fade-up" delay={200}>
            <div className="tool-card">
              <div className="tool-card-header">
                <div className="icon-wrapper">
                  <Smartphone />
                </div>
                <h2 className="tool-title">Generador de Enlace WhatsApp</h2>
              </div>
              <p className="tool-description">
                Crea rápidamente un enlace wa.me para que tus clientes te contacten con un mensaje predefinido con un solo clic.
              </p>

              <form onSubmit={handleGenerateWaLink} className="wa-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="wa-number">Número de Teléfono (ej: 56912345678)</label>
                  <input
                    id="wa-number"
                    type="text"
                    placeholder="56912345678"
                    value={waNumber}
                    onChange={(e) => setWaNumber(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="wa-message">Mensaje Opcional</label>
                  <textarea
                    id="wa-message"
                    placeholder="¡Hola! Me gustaría cotizar..."
                    value={waMessage}
                    onChange={(e) => setWaMessage(e.target.value)}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn-primary">
                  Generar Enlace
                </button>
              </form>

              {waLink && (
                <div className="result-box">
                  <p className="result-text">{waLink}</p>
                  <button onClick={handleCopyWaLink} className="btn-solid">
                    {waCopied ? <><CheckCircle /> Copiado!</> : <><Copy /> Copiar Enlace</>}
                  </button>
                </div>
              )}
            </div>
          </Animation>

          {/* WebP Optimizer Card */}
          <Animation animation="fade-up" delay={300}>
            <div className="tool-card">
              <div className="tool-card-header">
                <div className="icon-wrapper">
                  <UploadCloud />
                </div>
                <h2 className="tool-title">Optimizador WebP Global</h2>
              </div>
              <p className="tool-description">
                Convierte tus pesadas imágenes JPG y PNG al moderno formato WebP (hasta un 80% menos de peso) sin perder calidad ni salir del navegador.
              </p>

              <div
                className={`drop-zone ${isObjectDragging ? 'dragging' : ''}`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
              >
                <UploadCloud className="drop-icon" />
                <p className="drop-title">Arrastra tu imagen JPG/PNG aquí</p>
                <p className="drop-subtitle">o haz clic para seleccionar</p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileInputChange}
                  accept="image/jpeg, image/png"
                  style={{ display: 'none' }}
                />
              </div>

              {webpFileUrl && (
                <div className="mt-6" style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <p className="success-message">
                    <CheckCircle /> Imagen convertida con éxito
                  </p>
                  <a
                    href={webpFileUrl}
                    download={webpFileName}
                    onClick={() => trackToolUsage('Optimizador WebP')}
                    className="btn-solid btn-solid-large"
                    style={{ textDecoration: 'none' }}
                  >
                    <Download style={{ width: '20px', height: '20px' }} /> Descargar {webpFileName}
                  </a>

                  {/* UX Banner Enhancement */}
                  <div className="ux-banner mt-4 p-3 bg-blue-900/30 border border-blue-800 rounded-lg text-center mt-4" style={{ marginTop: '16px' }}>
                    <p className="ux-text text-sm text-blue-200 m-0 leading-tight">
                      <span className="font-bold text-accent mr-1">💡 ¿Sabías que una web rápida mejora tu posicionamiento en Google?</span><br />
                      En SynapseDev optimizamos cada línea de código de tu negocio.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Animation>

          {/* Privacy Policy Generator Card */}
          <Animation animation="fade-up" delay={400}>
            <div className="tool-card">
              <div className="tool-card-header">
                <div className="icon-wrapper">
                  <ShieldCheck />
                </div>
                <h2 className="tool-title">Políticas de Privacidad (Chile)</h2>
              </div>
              <p className="tool-description">
                Genera un texto legal estándar basado en la Ley 19.628 sobre Protección de la Vida Privada, listo para usar en tu sitio web.
              </p>

              <form onSubmit={handleGeneratePrivacyPolicy} className="wa-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="pp-company">Nombre de la Empresa / Marca</label>
                  <input
                    id="pp-company"
                    type="text"
                    placeholder="Ej: SynapseDev SpA"
                    value={ppCompany}
                    onChange={(e) => setPpCompany(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="pp-rut">RUT de la Empresa</label>
                  <input
                    id="pp-rut"
                    type="text"
                    placeholder="Ej: 76.123.456-7"
                    value={ppRut}
                    onChange={(e) => setPpRut(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="pp-website">Sitio Web</label>
                  <input
                    id="pp-website"
                    type="text"
                    placeholder="Ej: https://synapsedev.cl"
                    value={ppWebsite}
                    onChange={(e) => setPpWebsite(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary">
                  Generar Texto
                </button>
              </form>

              {ppText && (
                <div className="result-box policy-result">
                  <pre className="result-text" style={{ whiteSpace: 'pre-wrap', fontFamily: 'sans-serif', maxHeight: '150px', overflowY: 'auto' }}>
                    {ppText}
                  </pre>
                  <div className="btn-group" style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                    <button onClick={handleCopyPrivacyPolicy} className="btn-solid" style={{ flex: 1 }}>
                      {ppCopied ? <><CheckCircle /> Copiado!</> : <><Copy /> Copiar</>}
                    </button>
                    <button onClick={handleDownloadPrivacyPolicy} className="btn-solid" style={{ flex: 1, backgroundColor: '#234b6b' }}>
                      <Download /> Descargar .txt
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Animation>

          {/* Efficiency Calculator Card */}
          <Animation animation="fade-up" delay={500}>
            <div className="tool-card">
              <div className="tool-card-header">
                <div className="icon-wrapper">
                  <Calculator />
                </div>
                <h2 className="tool-title">Calculadora de Eficiencia</h2>
              </div>
              <p className="tool-description">
                Descubre cuánto tiempo estás perdiendo al mes en la gestión manual de tareas repetitivas.
              </p>

              <div className="wa-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="eff-tasks">Tareas diarias (en promedio)</label>
                  <input
                    id="eff-tasks"
                    type="number"
                    placeholder="Ej: 15"
                    value={effTasks}
                    onChange={(e) => setEffTasks(e.target.value)}
                    className="form-input"
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="eff-minutes">Minutos por tarea manual</label>
                  <input
                    id="eff-minutes"
                    type="number"
                    placeholder="Ej: 10"
                    value={effMinutes}
                    onChange={(e) => setEffMinutes(e.target.value)}
                    className="form-input"
                    min="0"
                  />
                </div>

                <div className="result-box mt-4" style={{ backgroundColor: '#102532', borderColor: '#FF6600', borderWidth: '1px', borderStyle: 'solid', display: (effTasks && effMinutes) ? 'flex' : 'none' }}>
                  <p className="text-center font-bold text-white text-lg">
                    Estás gastando <span className="text-accent text-2xl mx-1">{calculateEfficiency()}</span> horas al mes en gestión manual.
                  </p>
                  <p className="text-center text-sm text-gray-400 mt-2">
                    (Cálculo basado en 20 días hábiles)
                  </p>
                </div>

                <a
                  href="https://operia.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-operia"
                  onClick={() => trackToolUsage('Calculadora de Eficiencia - CTA Operia')}
                  style={{ display: (effTasks && effMinutes) ? 'flex' : 'none', marginTop: '16px' }}
                >
                  Optimiza tu flujo con Operia <ArrowRight style={{ width: '20px', height: '20px', marginLeft: '8px' }} />
                </a>

              </div>
            </div>
          </Animation>

        </div>

        {/* Conversion CTA */}
        <Animation animation="fade-up" delay={600}>
          <div className="cta-banner">
            <div className="cta-bg-glow-1" />
            <div className="cta-bg-glow-2" />

            <h3 className="cta-title">
              ¿Listo para dar el siguiente paso en la evolución digital?
            </h3>
            <p className="cta-description">
              ¿Necesitas una solución a medida, una web de alto impacto o automatización para tu negocio? Construimos tecnología para emprendedores.
            </p>
            <div className="cta-button-container">
              <Link to="/contact" className="btn-cta">
                Agendar Asesoría Gratuita
              </Link>
            </div>
          </div>
        </Animation>
      </main>

      {/* Floating CTA */}
      <Link to="/contact" className="floating-cta">
        🚀 Consultoría Gratis
      </Link>

      <Footer />
    </div>
  );
};

export default Tools;
