const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const POSTS_FILE = path.join(__dirname, '../data/posts.json');

// Middleware para leer los posts desde posts.json
function readPosts() {
    try {
        if (!fs.existsSync(POSTS_FILE)) {
            fs.writeFileSync(POSTS_FILE, JSON.stringify([]));
            return [];
        }
        const data = fs.readFileSync(POSTS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer posts.json:', error);
        return [];
    }
}

// Middleware para escribir los posts en posts.json
function writePosts(posts) {
    try {
        fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
        return true;
    } catch (error) {
        console.error('Error al escribir posts.json:', error);
        return false;
    }
}

// Middleware de autenticación simple usando Authorization header
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!process.env.ADMIN_PASSWORD) {
        return res.status(500).json({ error: 'Configuración del servidor incompleta (falta ADMIN_PASSWORD)' });
    }
    if (!token || token !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ error: 'No autorizado' });
    }
    next();
};

// GET /api/posts - Obtener todos los posts públicos
router.get('/', (req, res) => {
    try {
        const posts = readPosts();
        // Ordenar de más reciente a más antiguo si es necesario
        const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        res.status(200).json(sortedPosts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los posts' });
    }
});

// GET /api/posts/:id - Obtener un post en específico (por id o slug)
router.get('/:id', (req, res) => {
    try {
        const posts = readPosts();
        const post = posts.find((p) => p.id === req.params.id || p.slug === req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Post no encontrado' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor al obtener el post' });
    }
});

// POST /api/posts - Crear un nuevo post (Protegido)
router.post('/', authMiddleware, (req, res) => {
    try {
        const { title, content, image, date, slug } = req.body;

        if (!title || !content || !date || !slug) {
            return res.status(400).json({ error: 'Faltan campos obligatorios (title, content, date, slug)' });
        }

        const posts = readPosts();
        const newPost = {
            id: crypto.randomUUID(),
            title,
            content,
            image: image || '',
            date,
            slug,
            createdAt: new Date().toISOString()
        };

        posts.push(newPost);
        const success = writePosts(posts);

        if (success) {
            res.status(201).json(newPost);
        } else {
            res.status(500).json({ error: 'No se pudo guardar el post' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor al crear el post' });
    }
});

// DELETE /api/posts/:id - Eliminar un post por id (Protegido)
router.delete('/:id', authMiddleware, (req, res) => {
    try {
        const posts = readPosts();
        const filteredPosts = posts.filter((p) => p.id !== req.params.id);

        if (posts.length === filteredPosts.length) {
            return res.status(404).json({ error: 'Post no encontrado para eliminar' });
        }

        const success = writePosts(filteredPosts);

        if (success) {
            res.status(200).json({ message: 'Post eliminado correctamente' });
        } else {
            res.status(500).json({ error: 'No se pudo eliminar el post' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor al eliminar el post' });
    }
});

module.exports = router;
