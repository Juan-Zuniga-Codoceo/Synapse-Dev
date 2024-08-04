require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { token, name, email, message } = req.body;

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await axios.post(verifyUrl);
    if (!response.data.success) {
      return res.status(400).json({ error: 'Failed captcha verification' });
    }

    // Aquí envías el email usando EmailJS o cualquier servicio de tu elección
    emailjs.send(
      'service_1msab3m',
      'template_xiw5q6u',
      { name, email, message },
      'SlG90DUKfXFv5Dr8I'
    )
      .then(() => res.status(200).json({ success: 'Mensaje enviado correctamente' }))
      .catch((error) => res.status(500).json({ error: 'Error al enviar el correo' }));

  } catch (error) {
    res.status(500).json({ error: 'Error al verificar reCAPTCHA' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
