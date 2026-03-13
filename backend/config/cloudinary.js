const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configuración de credenciales de Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configuración del storage de multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'synapse_blog', // Nombre de la carpeta en Cloudinary
        allowedFormats: ['jpeg', 'png', 'jpg', 'webp'],
        // transformation: [{ width: 1000, crop: "limit" }] // Opcional: redimensionar imágenes grandes
    }
});

module.exports = {
    cloudinary,
    storage
};
