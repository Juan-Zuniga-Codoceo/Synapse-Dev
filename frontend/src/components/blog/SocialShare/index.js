import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check, Twitter, Linkedin } from 'lucide-react';
import './styles.css';

const SocialShare = ({ title, url }) => {
    const [copied, setCopied] = useState(false);

    const shareUrl = url || window.location.href;
    const shareTitle = title || document.title;

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => console.error('Error al copiar:', err));
    };

    const shareLinks = {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
    };

    return (
        <div className="social-share-container">
            <div className="social-share-title">
                <Share2 size={18} />
                <span>Compartir artículo</span>
            </div>
            <div className="social-share-buttons">
                {/* WhatsApp */}
                <a
                    href={shareLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn whatsapp"
                    title="Compartir en WhatsApp"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                </a>

                {/* LinkedIn */}
                <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn linkedin"
                    title="Compartir en LinkedIn"
                >
                    <Linkedin size={20} />
                </a>

                {/* Twitter / X */}
                <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn twitter"
                    title="Compartir en X"
                >
                    <Twitter size={20} />
                </a>

                {/* Copy Link */}
                <button
                    onClick={handleCopy}
                    className={`share-btn copy-link ${copied ? 'copied' : ''}`}
                    title="Copiar enlace"
                >
                    {copied ? <Check size={20} /> : <LinkIcon size={20} />}
                </button>
            </div>

            {copied && <span className="copy-feedback">¡Enlace copiado!</span>}
        </div>
    );
};

export default SocialShare;
