# Documentación Completa del Proyecto: Synapse Dev

Este repositorio es un monorepo que contiene la plataforma principal de **Synapse Dev** (agencia de desarrollo de software y marketing digital). Integra el portafolio corporativo, un Sistema de Gestión de Contenidos (CMS) personalizado al estilo WordPress para el Blog, utilidades interactivas para emprendedores y el sistema de distribución para la app móvil **CATO: LIFE OS**.

---

## 📋 Estructura General del Proyecto

El proyecto está organizado en dos directorios principales (frontend y backend) bajo una configuración monorepo con soporte para despliegue en Vercel.

```text
Synapse Dev/
├── backend/                  # Servidor Express.js y API REST
│   ├── config/               # Configuración de servicios externos (Cloudinary, etc.)
│   ├── data/                 # Archivos de persistencia local (stats.json)
│   ├── middleware/           # Middlewares (autenticación JWT)
│   ├── models/               # Modelos Mongoose (User, Post, Subscriber)
│   ├── routes/               # Enrutadores de la API (auth, posts, newsletter, pitch, uploads)
│   ├── public/downloads/     # Directorio local para descargas (APKs de CATO)
│   ├── server.js             # Punto de entrada del servidor Express
│   └── package.json          # Dependencias y scripts del backend
│
├── frontend/                 # Aplicación React (SPA)
│   ├── public/               # Archivos estáticos públicos (index.html, robots.txt)
│   ├── src/
│   │   ├── assets/           # Logotipos, iconos e imágenes globales
│   │   ├── components/       # Componentes de UI reutilizables (layout, home, blog, tools)
│   │   ├── constants/        # Constantes globales (información de contacto, redes)
│   │   ├── pages/            # Páginas de la aplicación (Home, Blog, Admin, Tools, Cato, etc.)
│   │   ├── App.js            # Enrutador principal de React
│   │   └── index.js          # Punto de entrada de React
│   └── package.json          # Dependencias y scripts del frontend
│
├── vercel.json               # Configuración de despliegue y ruteo en Vercel
├── README.md                 # Guía rápida del repositorio
└── DOCUMENTACION.md          # Esta documentación detallada
```

---

## 🎨 Frontend (React.js SPA)

El frontend está desarrollado sobre **React 18** y está estructurado para ofrecer una experiencia fluida, rápida y optimizada para SEO.

### Tecnologías Clave:
*   **React Router DOM v6**: Manejo de rutas del lado del cliente.
*   **React Quill**: Editor de texto enriquecido usado en el panel de administración.
*   **Lucide React & FontAwesome**: Paquetes de iconos vectoriales modernos.
*   **Sass**: Procesador CSS para estilos modulares.

### Rutas de la Aplicación (`frontend/src/App.js`):
1.  **`/` (Home)**: Página de inicio con banners informativos (ej. Sercotec), servicios destacados y últimos proyectos.
2.  **`/services` (Servicios)**: Detalle del catálogo de servicios ofrecidos por Synapse Dev.
3.  **`/portfolio` (Portafolio)**: Muestra de proyectos anteriores con filtros y descripciones detalladas.
4.  **`/about` (Acerca de)**: Misión, visión e información sobre el equipo técnico de la agencia.
5.  **`/contact` (Contacto)**: Formulario de contacto con validaciones de campos que se comunica con el servidor para el envío de correos electrónicos corporativos.
6.  **`/blog` (Blog)**: Listado dinámico de artículos publicados, ordenados cronológicamente.
7.  **`/blog/:slug` (Entrada de Blog)**: Vista completa de cada artículo. Incluye meta-etiquetas SEO dinámicas (título, descripción, palabras clave), botones de compartir en redes sociales y un formulario de suscripción al newsletter.
8.  **`/operia` (Operia)**: Landing page enfocada en soluciones para la plataforma SaaS Operia (Gestión de Tareas para Equipos).
9.  **`/cato` (CATO: LIFE OS)**: Landing page del producto gamificado de productividad. Incorpora un modal emergente que se activa automáticamente al hacer scroll (`CatoModal`) animando a los usuarios a descargar la aplicación móvil.
10. **`/tools` (Herramientas)**: Panel interactivo con herramientas gratuitas para emprendedores chilenos (ver sección de Herramientas).
11. **`/admin` (CMS Panel)**: Panel de administración protegido para gestionar el contenido del blog y los suscriptores.

---

## 🛠️ Herramientas Gratuitas (`/tools`)

El proyecto incluye un módulo interactivo para emprendedores con utilidades autogestionadas en el cliente y mediante la API:

1.  **Analizador de Velocidad Web**: Proxy que consume Google PageSpeed Insights de forma segura. Si el resultado es menor a 90 puntos, alerta al usuario sobre fallos que afectan al SEO y provee un enlace directo para contactar a Synapse Dev con el asunto precargado.
2.  **Generador de Pitch Comercial con IA**: Formulario interactivo que recopila la idea de negocio, público objetivo y tono de voz (Persuasivo, Entusiasta, Formal, o Cercano/Chileno con modismos locales). Utiliza streaming para mostrar la respuesta en tiempo real.
3.  **Generador de Enlaces de WhatsApp**: Crea de forma sencilla un enlace de `wa.me` con el número y mensaje personalizado para facilitar la comunicación con clientes.
4.  **Optimizador WebP Global**: Convierte archivos JPG y PNG al formato WebP optimizado con compresión del 80% usando el elemento `<canvas>` directamente en el navegador del usuario (sin subir imágenes a ningún servidor).
5.  **Generador de Políticas de Privacidad**: Crea plantillas de políticas de privacidad para sitios web chilenos alineadas a la **Ley Nº 19.628 sobre Protección de la Vida Privada**. Permite descargar el resultado en formato `.txt` o copiarlo.
6.  **Calculadora de Eficiencia**: Muestra cuántas horas al mes se desperdician en procesos manuales y ofrece una llamada a la acción para automatizar flujos a través de Operia.

---

## 📡 Backend (Node.js & Express)

El backend provee los endpoints REST necesarios para la persistencia en base de datos, tareas automatizadas, integraciones de IA y envío de correos.

### Tecnologías Clave:
*   **Mongoose**: Modelado de objetos para MongoDB.
*   **JWT (JSON Web Tokens) & bcryptjs**: Autenticación segura y encriptación de contraseñas.
*   **Google Generative AI SDK**: Integración directa con **Gemini 2.5 Flash** para streaming de texto.
*   **Cloudinary & Multer**: Subida y almacenamiento de imágenes en la nube.
*   **Nodemailer**: Envío de correos a través de servidores SMTP seguros.
*   **Node-Cron**: Ejecución de tareas programadas (publicación automatizada).
*   **Sitemap**: Generación en tiempo real del archivo `sitemap.xml` comprimido para SEO técnico.

### Base de Datos - Modelos Mongoose (`backend/models/`):

#### 1. `User` (Administradores)
*   `email` (String, único, requerido, lowercase)
*   `password` (String, requerido, hash bcrypt)
*   `role` (String, por defecto 'admin')

#### 2. `Post` (Entradas de Blog)
*   `title` (String, requerido)
*   `slug` (String, requerido, único para URLs)
*   `content` (String, requerido, contenido HTML de Quill)
*   `image` (String, URL de imagen destacada en Cloudinary)
*   `status` (String, enum: `['draft', 'published', 'scheduled']`, por defecto `published`)
*   `scheduledAt` (Date, fecha y hora de publicación programada)
*   `metaTitle` (String, meta-título SEO)
*   `metaDescription` (String, meta-descripción SEO)
*   `focusKeyword` (String, palabra clave SEO)
*   `createdAt` (Date, fecha de creación)

#### 3. `Subscriber` (Newsletter)
*   `email` (String, único, requerido, lowercase)
*   `active` (Boolean, por defecto `true` para envíos activos)
*   `createdAt` (Date, fecha de registro)

---

## 🔌 API Endpoints Map

### Autenticación (`/api/auth`)
*   `POST /api/auth/login`: Autentica credenciales de administrador y genera un JWT con duración de 24 horas.

### Blog CMS (`/api/posts`)
*   `GET /api/posts`: Obtiene la lista de todos los posts con estado `published` (Público).
*   `GET /api/posts/admin/all`: Obtiene todos los posts incluyendo borradores y programados (Protegido por JWT).
*   `GET /api/posts/:id`: Busca y retorna un post específico por su ID o su campo `slug` (Público).
*   `POST /api/posts`: Crea un nuevo post. Si el estado es `scheduled`, requiere el campo `scheduledAt` (Protegido por JWT).
*   `PUT /api/posts/:id`: Modifica un post existente. Mantiene el control de slugs estáticos para no romper SEO (Protegido por JWT).
*   `DELETE /api/posts/:id`: Elimina permanentemente un post de la base de datos (Protegido por JWT).

### Newsletter (`/api/newsletter`)
*   `POST /api/newsletter/subscribe`: Registra o reactiva un correo en la lista del newsletter (Público).
*   `GET /api/newsletter/subscribers`: Obtiene el listado completo de suscriptores activos (Protegido por JWT).

### IA Pitch Generator (`/api`)
*   `POST /api/generate-pitch`: Endpoint con respuesta en formato **Streaming (text/plain)**. Configura cabeceras especiales (`Connection: keep-alive`, `X-Accel-Buffering: no`) para enviar fragmentos de texto en tiempo real generados por el modelo `gemini-2.5-flash`.

### Subida de Archivos (`/api/upload`)
*   `POST /api/upload`: Recibe un archivo de imagen en el campo `image` y lo sube al servicio en la nube Cloudinary, retornando la URL segura HTTPS (Protegido por JWT).

### Otros Endpoints del Sistema
*   `GET /`: Verifica que el servidor Express está activo y responde.
*   `GET /health`: Health-check básico para plataformas de hosting (ej. Render).
*   `GET /sitemap.xml`: Genera dinámicamente un archivo XML comprimido en gzip conteniendo las rutas estáticas y todos los artículos del blog que estén publicados.
*   `GET /download-cato`: Endpoint para descargar el APK móvil de CATO. Registra y persiste estadísticas de descargas en `backend/data/stats.json` (contador total, timestamp, IP, User-Agent) y luego redirige mediante un código HTTP 302 a la URL de descarga externa en Dropbox.
*   `GET /api/view-stats`: Retorna los detalles y el historial del contador de descargas de CATO.
*   `GET /api/speed-analyze`: Proxy intermedio para PageSpeed Insights. Recibe la query `?url=` y realiza la consulta con la API Key configurada internamente en el backend para evitar exponerla en el código del cliente.

### Middlewares
*   `authMiddleware.js`: Intercepta cabeceras HTTP en busca de un token Bearer en `Authorization`. Si el token es válido y no ha expirado, inyecta los datos decodificados en `req.user` y permite el flujo hacia los controladores protegidos.

---

## ⏳ Tareas Automatizadas (Cron Jobs)

El servidor implementa una tarea programada ejecutada mediante `node-cron`:

*   **Frecuencia**: Cada minuto (`* * * * *`).
*   **Acción**: Busca todas las entradas en la base de datos cuyo `status` es `scheduled` (programado) y cuya fecha `scheduledAt` es menor o igual al tiempo actual. Cambia el estado de estas entradas a `published` y limpia el campo `scheduledAt`, haciéndolas visibles de inmediato en el blog.

---

## 🔒 Variables de Entorno requeridas

### Servidor Backend (`backend/.env`)
```env
# Configuración del servidor
PORT=5000

# Base de datos
MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<base-datos>

# JSON Web Tokens
JWT_SECRET=tu_clave_secreta_jwt

# Cloudinary (Almacenamiento de Imágenes)
CLOUDINARY_CLOUD_NAME=nombre_de_tu_cuenta
CLOUDINARY_API_KEY=clave_api_cloudinary
CLOUDINARY_API_SECRET=secreto_api_cloudinary

# Nodemailer (Envío de correos por SMTP corporativo)
SMTP_HOST=smtp.tuservidor.com
SMTP_PORT=587
EMAIL_USER=tu_correo@midominio.com
EMAIL_PASS=tu_contraseña_smtp
EMAIL_TO=correo_donde_recibiras_los_formularios

# API Keys Externas
GEMINI_API_KEY=tu_google_gemini_api_key
PAGESPEED_API_KEY=tu_google_pagespeed_api_key

# URL del Frontend (Para validación en CORS)
REACT_APP_API_URL=https://www.synapsedev.cl
```

### Aplicación Frontend (`frontend/.env` y `.env.development`)
```env
# URL de conexión al backend
REACT_APP_API_URL=https://www.synapsedev.cl
```
*En desarrollo local, se utiliza `.env.development` con `REACT_APP_API_URL=http://localhost:5000`.*

---

## 🚀 Despliegue en Vercel (Configuración de Monorepo)

El archivo `vercel.json` en la raíz del proyecto permite desplegar tanto el backend como el frontend en un único proyecto de Vercel de la siguiente manera:

1.  **Compilación de Node**: Compila el archivo `backend/server.js` utilizando el constructor oficial `@vercel/node`.
2.  **Compilación Estática de React**: Compila el directorio `frontend/package.json` utilizando `@vercel/static-build` y mapeando la carpeta resultante de producción (`build`).
3.  **Reglas de Ruteo**:
    *   Las peticiones dirigidas a `/api/(.*)` y a `/download-cato` se redirigen y procesan en el backend (`backend/server.js`).
    *   Todas las demás rutas `/(.*)` se resuelven en la estructura estática del frontend (`/frontend/$1`), permitiendo que React Router se haga cargo de la navegación interna del cliente.

---

## 🔧 Instrucciones de Configuración y Desarrollo Local

### Requisitos Previos:
*   Node.js (versión 18 o superior recomendada).
*   Una cuenta y clúster activo en MongoDB Atlas.

### Configuración del Servidor (Backend):
1.  Navegar a la carpeta `backend/`.
2.  Crear el archivo `.env` tomando como base las variables descritas en la sección anterior.
3.  Instalar dependencias:
    ```bash
    npm install
    ```
4.  Iniciar en modo desarrollo (utiliza nodemon para reinicios automáticos):
    ```bash
    npm run dev
    ```

### Configuración de la App (Frontend):
1.  Navegar a la carpeta `frontend/`.
2.  Verificar las variables de entorno en `.env.development`.
3.  Instalar dependencias:
    ```bash
    npm install
    ```
4.  Iniciar el servidor de desarrollo local:
    ```bash
    npm start
    ```
    *La aplicación se abrirá en `http://localhost:3000` y se comunicará con el backend local en `http://localhost:5000`.*
