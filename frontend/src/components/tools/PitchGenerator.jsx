import React, { useState } from 'react';
import { Copy, CheckCircle, Sparkles, AlertTriangle } from 'lucide-react';

const PitchGenerator = ({ className = '' }) => {
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  // Estados para controlar el formulario
  const [ideaNegocio, setIdeaNegocio] = useState('');
  const [publicoObjetivo, setPublicoObjetivo] = useState('');
  const [tonoVoz, setTonoVoz] = useState('Persuasivo');
  
  // Estados para controlar el flujo de la IA
  const [resultado, setResultado] = useState('');
  const [cargando, setCargando] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const [error, setError] = useState('');

  // Función principal para consumir el stream del backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Resetear estados iniciales
    setCargando(true);
    setResultado('');
    setError('');
    setCopiado(false);

    try {
      // 1. Realizar la petición POST al endpoint del backend usando API_URL
      const response = await fetch(`${API_URL}/api/generate-pitch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ideaNegocio,
          publicoObjetivo,
          tonoVoz,
        }),
      });

      // Validar si la respuesta del servidor fue correcta
      if (!response.ok) {
        throw new Error('Hubo un problema al conectar con el servidor de Synapse Dev.');
      }

      // 2. Obtener el lector del cuerpo de la respuesta (ReadableStream)
      const reader = response.body.getReader();
      // El decodificador nos permite transformar los bytes (Uint8Array) en texto legible (string)
      const decoder = new TextDecoder('utf-8');
      
      let done = false;

      // 3. Bucle para leer los trozos (chunks) de texto a medida que llegan
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        
        // Decodificar el fragmento binario a texto (con { stream: !done } para evitar rotura de caracteres multibyte)
        const chunkValue = decoder.decode(value || new Uint8Array(), { stream: !done });
        
        // Actualizar el estado añadiendo el nuevo fragmento de texto al ya existente
        setResultado((prev) => prev + chunkValue);
      }

    } catch (err) {
      console.error('Error en el streaming del frontend:', err);
      setError('Ocurrió un error inesperado al conectar con el generador de Pitch. Por favor, inténtalo de nuevo.');
    } finally {
      setCargando(false);
    }
  };

  // Función para copiar el resultado al portapapeles del dispositivo
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resultado);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000); // Resetear texto del botón en 2 segundos
    } catch (err) {
      console.error('Error al copiar texto:', err);
    }
  };

  return (
    <div className={`tool-card tool-card-featured ${className}`}>
      <div className="tool-card-header">
        <div className="icon-wrapper">
          <Sparkles />
        </div>
        <h2 className="tool-title">Generador de Pitch Comercial con IA</h2>
      </div>
      <p className="tool-description">
        Diseña un discurso comercial irresistible y adaptado al mercado chileno para tu negocio de manera gratuita.
      </p>

      <form onSubmit={handleSubmit} className="wa-form">
        <div className="form-group">
          <label className="form-label">
            ¿De qué se trata tu negocio o emprendimiento?
          </label>
          <textarea
            required
            placeholder="Ej: Una pizzería artesanal a la leña en Quilpué con reparto rápido a domicilio."
            value={ideaNegocio}
            onChange={(e) => setIdeaNegocio(e.target.value)}
            className="form-textarea"
            disabled={cargando}
            style={{ height: '80px' }}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            ¿Quién es tu público objetivo o cliente ideal?
          </label>
          <input
            required
            type="text"
            placeholder="Ej: Familias jóvenes y estudiantes universitarios de la zona."
            value={publicoObjetivo}
            onChange={(e) => setPublicoObjetivo(e.target.value)}
            className="form-input"
            disabled={cargando}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Tono de voz comercial:
          </label>
          <select
            value={tonoVoz}
            onChange={(e) => setTonoVoz(e.target.value)}
            className="form-input"
            disabled={cargando}
            style={{ backgroundColor: '#102532', color: '#ffffff' }}
          >
            <option value="Persuasivo">Persuasivo (Enfocado en beneficios y conversión)</option>
            <option value="Entusiasta">Entusiasta (Dinámico y con mucha pasión)</option>
            <option value="Formal">Formal (Corporativo, profesional y serio)</option>
            <option value="Cercano/Chileno">Cercano/Chileno (Amistoso con modismos locales sutiles)</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={cargando}
          className="btn-primary"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          {cargando ? (
            <>
              <span className="spinner"></span> Redactando propuesta con IA...
            </>
          ) : 'Generar Pitch Comercial'}
        </button>
      </form>

      {/* Alertas de Error */}
      {error && (
        <div 
          className="mt-4 p-3 rounded-lg text-sm" 
          style={{ 
            marginTop: '16px', 
            backgroundColor: 'rgba(127, 29, 29, 0.3)', 
            border: '1px solid rgba(153, 27, 27, 0.5)', 
            borderRadius: '0.5rem', 
            padding: '12px', 
            color: '#fecaca', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px' 
          }}
        >
          <AlertTriangle style={{ width: '16px', height: '16px', flexShrink: 0 }} /> {error}
        </div>
      )}

      {/* Panel de Resultados */}
      {resultado && (
        <div className="result-box policy-result" style={{ marginTop: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', gap: '16px' }}>
            <h3 style={{ margin: 0, fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>Tu Propuesta de Venta:</h3>
            <button
              onClick={handleCopy}
              className="btn-solid"
              style={{ padding: '6px 12px', fontSize: '0.875rem' }}
            >
              {copiado ? (
                <>
                  <CheckCircle style={{ width: '14px', height: '14px' }} /> ¡Copiado!
                </>
              ) : (
                <>
                  <Copy style={{ width: '14px', height: '14px' }} /> Copiar Texto
                </>
              )}
            </button>
          </div>
          {/* Conserva los saltos de línea (\n) del Markdown que devuelve Gemini */}
          <div 
            className="result-text" 
            style={{ 
              whiteSpace: 'pre-wrap', 
              lineHeight: '1.6', 
              fontFamily: 'inherit', 
              fontSize: '0.95rem',
              maxHeight: '400px',
              overflowY: 'auto',
              border: '1px solid #234b6b',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: '#0b1a24'
            }}
          >
            {resultado}
          </div>
        </div>
      )}
    </div>
  );
};

export default PitchGenerator;
