const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/newsletter/subscribe - Suscribirse al newsletter (público)
router.post('/subscribe', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Email inválido.' });
        }

        // Check si ya existe
        const existing = await Subscriber.findOne({ email: email.toLowerCase().trim() });
        if (existing) {
            if (existing.active) {
                return res.status(200).json({ message: '¡Ya estás suscrito! Te avisaremos con cada nuevo artículo.' });
            } else {
                // Reactivar suscripción
                existing.active = true;
                await existing.save();
                return res.status(200).json({ message: '¡Bienvenido de vuelta! Tu suscripción ha sido reactivada.' });
            }
        }

        const subscriber = await Subscriber.create({ email });
        res.status(201).json({ message: '¡Te has suscrito correctamente! 🎉', subscriber: { email: subscriber.email } });
    } catch (error) {
        console.error('Error al suscribir:', error);
        res.status(500).json({ error: 'Error interno al procesar la suscripción.' });
    }
});

// GET /api/newsletter/subscribers - Listar suscriptores (Protegido)
router.get('/subscribers', authMiddleware, async (req, res) => {
    try {
        const subscribers = await Subscriber.find({ active: true }).sort({ createdAt: -1 });
        res.status(200).json({
            total: subscribers.length,
            subscribers
        });
    } catch (error) {
        console.error('Error al obtener suscriptores:', error);
        res.status(500).json({ error: 'Error al obtener suscriptores.' });
    }
});

module.exports = router;
