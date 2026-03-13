const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Buscar el header de Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'No autorizado. Token requerido' });
    }

    // Extraer el token (eliminar 'Bearer ')
    const token = authHeader.split(' ')[1];

    if (!process.env.JWT_SECRET) {
        return res.status(500).json({ error: 'Configuración del servidor incompleta (falta JWT_SECRET)' });
    }

    try {
        // Verificar firma y validez de tiempo
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Adjuntar data de usuario al request
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido o expirado' });
    }
};

module.exports = authMiddleware;
