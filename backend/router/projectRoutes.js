const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Ruta para obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
