# Sistema de Distribución CATO: LIFE OS

Plataforma Full-Stack para la distribución independiente de CATO: LIFE OS, una aplicación móvil Android de productividad gamificada.

## 🚀 Características

- **Backend Express**: Servidor de descarga APK con headers correctos
- **Frontend React**: Landing page con capturas reales de la aplicación
- **Modal de Lanzamiento**: Notificación automática al hacer scroll
- **Navegación Optimizada**: Interfaz limpia con prioridad a CATO

## 📁 Estructura

```
├── backend/
│   ├── public/downloads/          # APKs (NO en Git)
│   └── server.js                  # Servidor Express
├── frontend/
│   ├── src/
│   │   ├── pages/Cato/           # Landing page CATO
│   │   ├── components/layout/
│   │   │   ├── Navbar/           # Nav simplificado
│   │   │   ├── Footer/           # Con Blog y Acerca de
│   │   │   └── CatoModal/        # Modal de lanzamiento
│   │   └── img/Cato/             # Screenshots reales
│   └── package.json
└── README.md
```

## ⚠️ Gestión del APK

El archivo `cato_life_os.apk` (~200MB) **NO está en Git**.

### Subir APK manualmente:

```bash
# Local
cp /ruta/cato_life_os.apk backend/public/downloads/

# Producción (SCP)
scp cato_life_os.apk usuario@synapsedev.cl:/proyecto/backend/public/downloads/
```

### .gitignore incluye:
```
backend/public/downloads/*.apk
```

## 🛠️ Instalación

### Backend
```bash
cd backend
npm install
node server.js
```
Puerto: `http://localhost:5000`

### Frontend
```bash
cd frontend
npm install
npm start
```
Puerto: `http://localhost:3000`

## 📡 Endpoints

### GET `/download-cato`
Descarga el APK de CATO.

**Responses:**
- `200`: Archivo APK
- `404`: APK no encontrado
- `500`: Error del servidor

## 🎨 Paleta de Colores

- **Fondo**: `#102532`
- **Acento**: `#FF6600`
- **Texto**: `#cbd5e1`

## 🚀 Deployment

1. Actualizar URL en edición:
   ```javascript
   // frontend/src/pages/Cato/index.js
   window.location.href = 'https://synapsedev.cl/download-cato';
   ```

2. Build frontend:
   ```bash
   npm run build
   ```

3. Subir APK al servidor (ver sección "Gestión del APK")

## 📞 Contacto

**Synapse Dev**
- Email: contacto@synapsedev.cl
- WhatsApp: +56 9 2033 3538
- Web: https://synapsedev.cl

---

Desarrollado con **Antigravity** (Google Deepmind)
