const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const authMiddleware = require('../middleware/authMiddleware');

// GET /api/posts - Obtener todos los posts PUBLICADOS (público)
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({ status: 'published' }).sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error al obtener posts:', error);
        res.status(500).json({ error: 'Error al obtener los posts' });
    }
});

// GET /api/posts/admin/all - Obtener TODOS los posts para el CMS (Protegido)
router.get('/admin/all', authMiddleware, async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error al obtener posts admin:', error);
        res.status(500).json({ error: 'Error al obtener los posts' });
    }
});

// GET /api/posts/:id - Obtener un post en específico (por id o slug) - solo publicados en frontend
router.get('/:id', async (req, res) => {
    try {
        const param = req.params.id;

        let post;
        if (param.match(/^[0-9a-fA-F]{24}$/)) {
            post = await Post.findById(param);
        }

        if (!post) {
            post = await Post.findOne({ slug: param });
        }

        if (!post) {
            return res.status(404).json({ error: 'Post no encontrado' });
        }

        // No mostrar drafts ni scheduled al público
        if (post.status !== 'published') {
            return res.status(404).json({ error: 'Post no encontrado' });
        }

        res.status(200).json(post);
    } catch (error) {
        console.error('Error al obtener el post:', error);
        res.status(500).json({ error: 'Error interno del servidor al obtener el post' });
    }
});

// POST /api/posts - Crear un nuevo post (Protegido)
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, content, image, slug, status, scheduledAt, metaTitle, metaDescription, focusKeyword } = req.body;

        if (!title || !content || !slug) {
            return res.status(400).json({ error: 'Faltan campos obligatorios (title, content, slug)' });
        }

        // Si el status es 'scheduled', scheduledAt es obligatorio
        if (status === 'scheduled' && !scheduledAt) {
            return res.status(400).json({ error: 'Debes indicar una fecha de publicación para programar el post.' });
        }

        const newPostData = {
            title,
            content,
            slug,
            image: image || '',
            status: status || 'published',
            scheduledAt: status === 'scheduled' ? new Date(scheduledAt) : null,
            metaTitle: metaTitle || '',
            metaDescription: metaDescription || '',
            focusKeyword: focusKeyword || ''
        };

        const newPost = await Post.create(newPostData);
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error interno del servidor al crear el post:', error);
        if (error.code === 11000) {
            return res.status(400).json({ error: 'El slug ya está en uso. Debe ser único.' });
        }
        res.status(500).json({ error: 'Error interno del servidor al crear el post' });
    }
});

// DELETE /api/posts/:id - Eliminar un post por id (Protegido)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({ error: 'Post no encontrado para eliminar' });
        }

        res.status(200).json({ message: 'Post eliminado correctamente' });
    } catch (error) {
        console.error('Error interno del servidor al eliminar el post:', error);
        res.status(500).json({ error: 'Error interno del servidor al eliminar el post' });
    }
});

// PUT /api/posts/:id - Actualizar un post existente (Protegido)
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const { title, content, image, slug, status, scheduledAt, metaTitle, metaDescription, focusKeyword } = req.body;

        if (!title || !content || !slug) {
            return res.status(400).json({ error: 'Faltan campos obligatorios (title, content, slug)' });
        }

        if (status === 'scheduled' && !scheduledAt) {
            return res.status(400).json({ error: 'Debes indicar una fecha de publicación para programar el post.' });
        }

        const updatedData = {
            title,
            content,
            slug,
            image: image || '',
            status: status || 'published',
            scheduledAt: status === 'scheduled' ? new Date(scheduledAt) : null,
            metaTitle: metaTitle || '',
            metaDescription: metaDescription || '',
            focusKeyword: focusKeyword || ''
        };

        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true, runValidators: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ error: 'Post no encontrado para actualizar' });
        }

        res.status(200).json(updatedPost);
    } catch (error) {
        console.error('Error interno del servidor al actualizar el post:', error);
        if (error.code === 11000) {
            return res.status(400).json({ error: 'El slug ya está en uso. Debe ser único.' });
        }
        res.status(500).json({ error: 'Error interno del servidor al actualizar el post' });
    }
});

module.exports = router;
