require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

// Inicializar express
const app = express();

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
