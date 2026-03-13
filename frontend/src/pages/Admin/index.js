import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Pencil, Trash2, Plus, LogOut, LayoutDashboard, FileText, Settings, Settings2 } from 'lucide-react';
import './styles.css';

const Admin = () => {
    const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [posts, setPosts] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingPostId, setEditingPostId] = useState(null);
    const [currentPost, setCurrentPost] = useState({ title: '', slug: '', image: '', content: '' });
    const [loading, setLoading] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [error, setError] = useState('');

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    useEffect(() => {
        if (token) {
            fetchPosts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${API_URL}/api/posts`);
            if (res.ok) {
                const data = await res.json();
                setPosts(data);
            } else {
                setError('Error al cargar posts');
            }
        } catch (err) {
            setError('No se pudo conectar al servidor');
        } finally {
            setLoading(false);
        }
    };

    const fetchPost = async (id) => {
        try {
            setLoading(true);
            const res = await fetch(`${API_URL}/api/posts/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setCurrentPost({
                    title: data.title || '',
                    slug: data.slug || '',
                    image: data.image || '',
                    content: data.content || ''
                });
            } else {
                setError('Error al cargar el post para editar');
            }
        } catch (err) {
            setError('Error de conexión al cargar post');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isEditing && editingPostId && token) {
            fetchPost(editingPostId);
        }
    }, [isEditing, editingPostId, token]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (res.ok) {
                const data = await res.json();
                localStorage.setItem('adminToken', data.token);
                setToken(data.token);
                setCredentials({ email: '', password: '' });
            } else {
                const errData = await res.json();
                setError(errData.error || 'Credenciales inválidas');
            }
        } catch (err) {
            setError('Error de conexión al servidor');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setToken('');
        setPosts([]);
    };

    const handleSavePost = async (e) => {
        if (e) e.preventDefault();
        setError('');

        try {
            setLoading(true);
            const method = editingPostId ? 'PUT' : 'POST';
            const url = editingPostId ? `${API_URL}/api/posts/${editingPostId}` : `${API_URL}/api/posts`;

            const res = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: currentPost.title || 'Sin Título',
                    slug: currentPost.slug || generateSlug(currentPost.title || 'nuevo-post'),
                    image: currentPost.image,
                    content: currentPost.content,
                    date: new Date().toISOString()
                })
            });

            if (res.ok) {
                setIsEditing(false);
                setEditingPostId(null);
                setCurrentPost({ title: '', slug: '', image: '', content: '' });
                fetchPosts();
            } else if (res.status === 401) {
                setError('Contraseña incorrecta. Cierra sesión e intenta de nuevo.');
            } else {
                const data = await res.json();
                setError(data.error || 'Error al guardar el post');
            }
        } catch (err) {
            setError('Error de conexión al guardar');
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            setUploadingImage(true);
            setError('');

            const res = await fetch(`${API_URL}/api/upload`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (res.ok) {
                const data = await res.json();
                setCurrentPost({ ...currentPost, image: data.url });
            } else {
                const errData = await res.json();
                setError(errData.error || 'Error al subir la imagen');
            }
        } catch (err) {
            setError('Error de conexión al subir imagen');
        } finally {
            setUploadingImage(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Seguro que deseas mover este post a la papelera?')) return;
        try {
            const res = await fetch(`${API_URL}/api/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                fetchPosts();
            } else if (res.status === 401) {
                setError('No autorizado para eliminar');
            } else {
                setError('Error al eliminar');
            }
        } catch (err) {
            setError('Error de conexión al eliminar');
        }
    };

    const generateSlug = (title) => {
        return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    if (!token) {
        return (
            <div className="wp-login-page">
                <div className="wp-login-form-container">
                    <div className="wp-login-logo">
                        <div className="wp-logo-placeholder">W</div>
                    </div>
                    <form className="wp-login-form" onSubmit={handleLogin}>
                        {error && <div className="wp-login-error">{error}</div>}
                        <div className="wp-input-group">
                            <label>Correo Electrónico</label>
                            <input
                                type="email"
                                value={credentials.email}
                                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                                required
                                autoFocus
                            />
                        </div>
                        <div className="wp-input-group" style={{ marginTop: '15px' }}>
                            <label>Contraseña</label>
                            <input
                                type="password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                required
                            />
                        </div>
                        <div className="wp-login-actions">
                            <button type="submit" className="wp-button-primary">Acceder</button>
                        </div>
                    </form>
                    <p className="wp-back-link"><a href="/">&larr; Volver a Synapse Dev</a></p>
                </div>
            </div>
        );
    }

    return (
        <div className="wp-admin-wrapper">
            {/* Sidebar Left */}
            <aside className="wp-sidebar">
                <div className="wp-sidebar-header">
                    Synapse Dev
                </div>
                <ul className="wp-menu">
                    <li className="wp-menu-item">
                        <button className="wp-menu-link" onClick={() => { setIsEditing(false); setEditingPostId(null); }}>
                            <LayoutDashboard size={18} /> Escritorio
                        </button>
                    </li>
                    <li className="wp-menu-item active">
                        <button className="wp-menu-link" onClick={() => { setIsEditing(false); setEditingPostId(null); }}>
                            <FileText size={18} /> Entradas
                        </button>
                        <ul className="wp-submenu">
                            <li><button onClick={() => { setIsEditing(false); setEditingPostId(null); }}>Todas las entradas</button></li>
                            <li><button onClick={() => { setIsEditing(true); setEditingPostId(null); setCurrentPost({ title: '', slug: '', image: '', content: '' }) }}>Añadir nueva</button></li>
                        </ul>
                    </li>
                    <li className="wp-menu-separator"></li>
                    <li className="wp-menu-item">
                        <button className="wp-menu-link" onClick={handleLogout}>
                            <LogOut size={18} /> Cerrar Sesión
                        </button>
                    </li>
                </ul>
            </aside>

            {/* Main Content Area */}
            <div className="wp-main">
                {/* Topbar */}
                <header className="wp-topbar">
                    <div className="wp-topbar-left">
                        <a href="/" target="_blank" rel="noopener noreferrer" className="wp-topbar-item" title="Ver sitio">
                            <span>Synapse Dev</span>
                        </a>
                        <button className="wp-topbar-item" onClick={() => { setIsEditing(true); setEditingPostId(null); setCurrentPost({ title: '', slug: '', image: '', content: '' }) }}>
                            <Plus size={16} /> <span style={{ marginLeft: '4px' }}>Añadir</span>
                        </button>
                    </div>
                    <div className="wp-topbar-right">
                        <span className="wp-topbar-item">Hola, admin</span>
                    </div>
                </header>

                <main className="wp-content">
                    {error && <div className="wp-notice wp-notice-error"><p>{error}</p></div>}

                    {isEditing ? (
                        <div className="wp-editor-view">
                            <div className="wp-editor-header">
                                <h1 className="wp-page-title">{editingPostId ? 'Editar entrada' : 'Añadir nueva entrada'}</h1>
                                <button className="wp-button-secondary" onClick={() => { setIsEditing(false); setEditingPostId(null); }}>Volver a Entradas</button>
                            </div>

                            <div className="wp-editor-layout">
                                {/* Left Column: Title & Content */}
                                <div className="wp-editor-main">
                                    <div className="wp-title-input-wrapper">
                                        <input
                                            type="text"
                                            className="wp-title-input"
                                            placeholder="Añadir el título"
                                            value={currentPost.title}
                                            onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                                            autoFocus
                                        />
                                    </div>

                                    {/* Permalink display */}
                                    {currentPost.title && (
                                        <div className="wp-permalink-display">
                                            <strong>Enlace permanente:</strong> {API_URL}/blog/{currentPost.slug || generateSlug(currentPost.title)}
                                        </div>
                                    )}

                                    <div className="wp-quill-wrapper">
                                        <ReactQuill
                                            theme="snow"
                                            value={currentPost.content}
                                            onChange={(val) => setCurrentPost({ ...currentPost, content: val })}
                                            modules={modules}
                                        />
                                    </div>
                                </div>

                                {/* Right Column: Meta Boxes */}
                                <div className="wp-editor-sidebar">
                                    {/* Publish Box */}
                                    <div className="wp-meta-box">
                                        <div className="wp-meta-box-header">
                                            <h2>Publicar</h2>
                                        </div>
                                        <div className="wp-meta-box-content">
                                            <div className="wp-publish-status">
                                                <Settings2 size={16} /> <span>Estado: <strong>Borrador</strong></span>
                                            </div>
                                            <div className="wp-publish-actions">
                                                <button className="wp-button-secondary">Solo guardar</button>
                                            </div>
                                        </div>
                                        <div className="wp-meta-box-footer">
                                            <button className="wp-button-link wp-text-danger" onClick={() => { setIsEditing(false); setEditingPostId(null); }}>Cancelar</button>
                                            <button className="wp-button-primary wp-button-large" onClick={handleSavePost} disabled={loading}>
                                                {loading ? (editingPostId ? 'Actualizando...' : 'Publicando...') : (editingPostId ? 'Actualizar' : 'Publicar')}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Slug Box */}
                                    <div className="wp-meta-box">
                                        <div className="wp-meta-box-header">
                                            <h2>URL amigable (Slug)</h2>
                                        </div>
                                        <div className="wp-meta-box-content">
                                            <input
                                                type="text"
                                                className="wp-input-standard"
                                                value={currentPost.slug}
                                                onChange={(e) => setCurrentPost({ ...currentPost, slug: e.target.value })}
                                                placeholder="Dejar en blanco para auto-generar"
                                                disabled={!!editingPostId}
                                            />
                                            {editingPostId && (
                                                <p style={{ color: '#d63638', fontSize: '12px', marginTop: '4px' }}>
                                                    El slug no admite edición por motivos de SEO.
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Featured Image Box */}
                                    <div className="wp-meta-box">
                                        <div className="wp-meta-box-header">
                                            <h2>Imagen destacada</h2>
                                        </div>
                                        <div className="wp-meta-box-content">
                                            <label className="wp-label-sm">Subir imagen</label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="wp-input-standard"
                                                onChange={handleImageUpload}
                                                disabled={uploadingImage}
                                                style={{ padding: '8px' }}
                                            />
                                            {uploadingImage && (
                                                <div style={{ marginTop: '8px', fontSize: '13px', color: '#2271b1' }}>
                                                    Subiendo imagen...
                                                </div>
                                            )}
                                            {currentPost.image && !uploadingImage && (
                                                <div className="wp-featured-image-preview">
                                                    <img src={currentPost.image} alt="Preview" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="wp-posts-view">
                            <div className="wp-page-header">
                                <h1 className="wp-page-title">Entradas</h1>
                                <button className="wp-button-secondary wp-add-new-btn" onClick={() => { setIsEditing(true); setEditingPostId(null); setCurrentPost({ title: '', slug: '', image: '', content: '' }) }}>Añadir nueva</button>
                            </div>

                            <ul className="wp-subsubsub">
                                <li className="all"><a href="#_" className="current">Todo <span className="count">({posts.length})</span></a> |</li>
                                <li className="publish"><a href="#_">Publicadas <span className="count">({posts.length})</span></a></li>
                            </ul>

                            <div className="wp-table-wrapper">
                                {loading && posts.length === 0 ? (
                                    <p style={{ padding: '20px' }}>Cargando...</p>
                                ) : (
                                    <table className="wp-list-table">
                                        <thead>
                                            <tr>
                                                <th className="column-title">Título</th>
                                                <th className="column-author">Autor</th>
                                                <th className="column-slug">Slug</th>
                                                <th className="column-date">Fecha</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {posts.length === 0 ? (
                                                <tr><td colSpan="4" className="no-items">No se encontraron entradas.</td></tr>
                                            ) : (
                                                posts.map(post => (
                                                    <tr key={post._id || post.id}>
                                                        <td className="column-title has-row-actions">
                                                            <strong><a href="#_" className="row-title" onClick={() => { setIsEditing(true); setEditingPostId(post._id || post.id); }}>{post.title || '(Sin título)'}</a></strong>
                                                            <div className="row-actions">
                                                                <span className="edit"><button className="link-action" onClick={() => { setIsEditing(true); setEditingPostId(post._id || post.id); }}>Editar</button> | </span>
                                                                <span className="trash"><button className="link-action text-danger" onClick={() => handleDelete(post._id || post.id)}>Papelera</button> | </span>
                                                                <span className="view"><a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">Ver</a></span>
                                                            </div>
                                                        </td>
                                                        <td className="column-author"><a href="#_">admin</a></td>
                                                        <td className="column-slug">{post.slug}</td>
                                                        <td className="column-date">
                                                            Publicada<br />
                                                            <span title={new Date(post.date).toLocaleString()}>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th className="column-title">Título</th>
                                                <th className="column-author">Autor</th>
                                                <th className="column-slug">Slug</th>
                                                <th className="column-date">Fecha</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                )}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Admin;
