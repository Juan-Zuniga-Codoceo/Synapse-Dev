import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import './styles.css';

const NewsletterWidget = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            setMessage('Por favor, ingresa un correo válido.');
            return;
        }

        setStatus('loading');
        try {
            const res = await fetch(`${API_URL}/api/newsletter/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage(data.message || '¡Te has suscrito con éxito!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.error || 'Ocurrió un error. Intenta nuevamente.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Error de conexión. Intenta más tarde.');
        }
    };

    return (
        <div className="newsletter-widget">
            <div className="nw-content">
                <div className="nw-header">
                    <Send className="nw-icon" />
                    <h3>Únete a nuestra comunidad</h3>
                </div>
                <p>Recibe los mejores consejos sobre tecnología, diseño y desarrollo web para potenciar tu negocio, directo en tu bandeja de entrada.</p>

                <form className="nw-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Tu correo electrónico..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                        className="nw-input"
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`nw-button ${status === 'loading' ? 'loading' : ''}`}
                    >
                        {status === 'loading' ? <Loader className="nw-spin" size={18} /> : 'Suscribirme'}
                    </button>
                </form>

                {status === 'success' && (
                    <div className="nw-message nw-success">
                        <CheckCircle size={16} /> <span>{message}</span>
                    </div>
                )}
                {status === 'error' && (
                    <div className="nw-message nw-error">
                        <AlertCircle size={16} /> <span>{message}</span>
                    </div>
                )}
            </div>
            {/* Visual elements for decoration */}
            <div className="nw-blob blob-1"></div>
            <div className="nw-blob blob-2"></div>
        </div>
    );
};

export default NewsletterWidget;
