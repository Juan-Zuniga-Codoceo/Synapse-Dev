const express = require('express');
const router = express.Router();
const axios = require('axios');

// Ruta para obtener todos los posts del blog usando la API de WordPress
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('URL_DE_TU_API_DE_WORDPRESS/posts');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
