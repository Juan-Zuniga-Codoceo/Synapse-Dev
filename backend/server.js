require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Configuración de CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:3000', // Reemplaza con la URL de tu frontend si es diferente
  methods: ['POST'], // Solo permitimos POST en este caso
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de nodemailer basada en la información proporcionada
const transporter = nodemailer.createTransport({
  host: 'mboxhosting.com', // Servidor SMTP
  port: 587, // Puedes usar 25 o 587 para STARTTLS
  secure: false, // false para STARTTLS, true para SSL/TLS
  auth: {
    user: process.env.EMAIL_USER, // Tu correo electrónico (e.g., contacto@synapsedev.cl)
    pass: process.env.EMAIL_PASS  // Tu contraseña de correo electrónico
  },
  tls: {
    rejectUnauthorized: false // Utiliza esto si estás teniendo problemas con certificados no verificados
  }
});

app.post('/send-email', async (req, res) => {
  console.log('Solicitud recibida:', req.body);  // Añadir este log para ver la solicitud

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    replyTo: email,
    to: process.env.EMAIL_TO,
    subject: subject,
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje:\n${message}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Mensaje enviado:', info.response);
    res.status(200).json({ success: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el correo' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
