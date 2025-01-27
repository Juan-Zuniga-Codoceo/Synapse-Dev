import React from 'react';
import { createRoot } from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/global.css'; // Importa styles.css desde la nueva carpeta css
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);