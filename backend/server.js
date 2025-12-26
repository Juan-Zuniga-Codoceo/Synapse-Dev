require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

// Inicializar express
const app = express();
const path = require('path');
const fs = require('fs');

// Utilidades para persistencia de estadísticas
const STATS_FILE = path.join(__dirname, 'data', 'stats.json');

// Asegurar que el directorio data existe
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Función para leer estadísticas
function readStats() {
  try {
    if (!fs.existsSync(STATS_FILE)) {
      // Crear archivo inicial si no existe
      const initialStats = {
        total_downloads: 0,
        downloads_history: []
      };
      fs.writeFileSync(STATS_FILE, JSON.stringify(initialStats, null, 2));
      return initialStats;
    }
    const data = fs.readFileSync(STATS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error al leer stats.json:', error);
    return { total_downloads: 0, downloads_history: [] };
  }
}

// Función para escribir estadísticas
function writeStats(stats) {
  try {
    fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));
    return true;
  } catch (error) {
    console.error('Error al escribir stats.json:', error);
    return false;
  }
}

// Configuración de CORS para permitir solicitudes desde el frontend
const allowedOrigins = [
  'http://localhost:3000',  // Permite solicitudes desde el frontend local
  'http://synapsedev.cl',
  'https://synapsedev.cl',
  'http://www.synapsedev.cl',
  'https://www.synapsedev.cl'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

// Configuración de body-parser para manejar JSON y URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta public/downloads
app.use('/downloads', express.static(path.join(__dirname, 'public/downloads')));

// Configuración de multer para manejar multipart/form-data
const upload = multer();

// Configuración de nodemailer basada en la información proporcionada
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // Oculto en el archivo .env
  port: process.env.SMTP_PORT, // Oculto en el archivo .env
  secure: false, // false para STARTTLS, true para SSL/TLS
  auth: {
    user: process.env.EMAIL_USER, // Tu correo electrónico
    pass: process.env.EMAIL_PASS  // Tu contraseña de correo electrónico
  },
  tls: {
    rejectUnauthorized: false // Utiliza esto si estás teniendo problemas con certificados no verificados
  }
});

// Ruta para verificar que el servidor está corriendo
app.get('/', (req, res) => {
  res.send('El servidor está corriendo correctamente');
});

// Endpoint para descargar CATO: LIFE OS APK (con contador y redirección)
app.get('/download-cato', (req, res) => {
  try {
    // Leer estadísticas actuales
    const stats = readStats();

    // Incrementar contador
    stats.total_downloads += 1;

    // Agregar entrada al historial con timestamp
    stats.downloads_history.push({
      timestamp: new Date().toISOString(),
      ip: req.ip || req.connection.remoteAddress,
      userAgent: req.get('user-agent') || 'unknown'
    });

    // Guardar estadísticas actualizadas
    const saved = writeStats(stats);

    if (!saved) {
      console.warn('No se pudieron guardar las estadísticas, pero redirigiendo de todas formas');
    }

    // URL de Dropbox para la descarga
    const DROPBOX_URL = 'https://www.dropbox.com/scl/fi/64nr0259yhf54sv8v2uvz/cato_life_os.apk?rlkey=8vf76tjp549lhic4qroqelzpn&st=005gplwt&dl=1';

    // Redirigir al usuario a Dropbox
    res.redirect(302, DROPBOX_URL);

  } catch (error) {
    console.error('Error en /download-cato:', error);
    // En caso de error, redirigir de todas formas
    res.redirect(302, 'https://www.dropbox.com/scl/fi/64nr0259yhf54sv8v2uvz/cato_life_os.apk?rlkey=8vf76tjp549lhic4qroqelzpn&st=005gplwt&dl=1');
  }
});

// Endpoint para visualizar estadísticas de descargas
app.get('/api/view-stats', (req, res) => {
  try {
    const stats = readStats();
    res.status(200).json({
      total_downloads: stats.total_downloads,
      downloads_history: stats.downloads_history,
      last_updated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    res.status(500).json({ error: 'Error al obtener estadísticas' });
  }
});

// Ruta para manejar el envío de correos
app.post('/send-email', upload.none(), async (req, res) => {
  console.log('Solicitud recibida:', req.body);

  const { name, email, subject, message } = req.body;

  // Validar que todos los campos estén presentes
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    // Enviar el correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: subject,
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje:\n${message}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Mensaje enviado:', info.response);
    res.status(200).json({ success: 'Mensaje enviado correctamente' });

  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el correo', details: error.message });
  }
});

// Escuchar en el puerto definido
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
