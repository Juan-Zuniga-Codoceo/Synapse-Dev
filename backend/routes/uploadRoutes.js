const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const authMiddleware = require('../middleware/authMiddleware');

const upload = multer({ storage });

// POST /api/upload - Subir una imagen a Cloudinary (Protegido)
// 'image' es el nombre del campo del formulario que contiene el archivo
router.post('/', authMiddleware, upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No se subió ningún archivo' });
        }

        // Devolvemos la URL segura proporcionada por Cloudinary
        res.status(200).json({ url: req.file.path });
    } catch (error) {
        console.error('Error al subir imagen:', error);
        res.status(500).json({ error: 'Error del servidor al procesar la imagen' });
    }
});

module.exports = router;
