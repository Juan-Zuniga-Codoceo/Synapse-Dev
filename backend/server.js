require('dotenv').config(); // Añade esto al inicio del archivo

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Importar rutas
const projectRoutes = require('./router/projectRoutes');
const postRoutes = require('./router/postRoutes');

app.use('/api/projects', projectRoutes);
app.use('/api/posts', postRoutes);

// Test de conexión a la base de datos
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
