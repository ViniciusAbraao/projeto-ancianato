// pages/admin.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'; // Import Next.js Link component for navigation
import 'bootstrap/dist/css/bootstrap.min.css'; // **Ensure bootstrap is installed in node_modules**

export default function AdminPage() {

    console.log("Firebase config:", firebase.app().options);

    const [formData, setFormData] = useState({
        titulo: '',
        data: '',
        local: '',
        descricao: '',
        imagem: null,
    });

    // type: 'success', 'danger', 'info', 'warning' (Bootstrap alert types)
    const [status, setStatus] = useState({ text: null, type: null });
    const [eventos, setEventos] = useState([]);
    const [loadingEventos, setLoadingEventos] = useState(true);

    const fetchEventos = async () => {
        setLoadingEventos(true);
        try {
            const response = await axios.get('/api/eventos');
            setEventos(response.data);
        } catch (error) {
            console.error('Erro ao buscar eventos:', error);
            setStatus({ text: 'Erro ao carregar a lista de eventos.', type: 'danger' });
            setEventos([]);
        } finally {
            setLoadingEventos(false);
        }
    };

    useEffect(() => {
        fetchEventos();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'imagem') {
            setFormData((prev) => ({ ...prev, imagem: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ text: 'Enviando evento...', type: 'info' });

        const imageData = new FormData();
        imageData.append('image', formData.imagem);

        try {
            const imgurResponse = await axios.post('https://api.imgur.com/3/upload', imageData, {
                headers: {
                    Authorization: 'Client-ID 3d953add1e4524f', // Your Imgur Client-ID
                },
            });
            const imageUrl = imgurResponse.data.data.link;

            const eventoData = {
                titulo: formData.titulo,
                data: formData.data,
                local: formData.local,
                descricao: formData.descricao,
                imagemUrl: imageUrl,
            };

            await axios.post('/api/eventos', eventoData);
            setStatus({ text: 'Evento enviado com sucesso!', type: 'success' });
            setFormData({
                titulo: '',
                data: '',
                local: '',
                descricao: '',
                imagem: null,
            });
            const fileInput = document.getElementById('imagem');
            if (fileInput) {
                fileInput.value = '';
            }
            fetchEventos();
        } catch (err) {
            setStatus({ text: 'Erro ao enviar o evento. Verifique os campos e tente novamente.', type: 'danger' });
            console.error(err);
        }
    };

    const handleDelete = async (eventoId, eventoTitulo) => {
        if (window.confirm(`Tem certeza que deseja excluir o evento "${eventoTitulo}"? Esta ação não pode ser desfeita.`)) {
            setStatus({ text: `Excluindo evento "${eventoTitulo}"...`, type: 'info' });
            try {
                await axios.delete(`/api/eventos?id=${eventoId}`);
                setEventos(eventos.filter(evento => evento.id !== eventoId));
                setStatus({ text: `Evento "${eventoTitulo}" excluído com sucesso!`, type: 'success' });
            } catch (error) {
                console.error('Erro ao excluir evento:', error);
                setStatus({ text: `Erro ao excluir evento "${eventoTitulo}".`, type: 'danger' });
            }
        }
    };

    const formatDate = (dateString) => {
        if (!dateString || !dateString.includes('-')) return "Data inválida";
        const parts = dateString.split('-');
        if (parts.length === 3) {
            return `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
        return dateString;
    };

    // Function to manually close the alert by updating state
    const closeAlert = () => {
        setStatus({ text: null, type: null });
    };

    return (
        <div style={{ backgroundColor: '#e9ecef', minHeight: '100vh', paddingTop: '30px', paddingBottom: '30px' }}>
            <div className="container">
                <div className="card shadow-lg">
                    <div className="card-body p-lg-5">
                        
                        {/* Botão Voltar para Home */}
                        <div className="mb-4">
                            <Link href="/" passHref>
                                <button className="btn btn-outline-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill mr-2" viewBox="0 0 16 16"> {/* Changed me-2 to mr-2 for BS4 */}
                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                    </svg>
                                    Voltar para Home
                                </button>
                            </Link>
                        </div>

                        <h1 className="text-center mb-5" style={{ color: '#007bff', fontWeight: 'bold' }}>Painel Administrativo de Eventos</h1>

                        {/* Formulário de Cadastro de Evento */}
                        <div className="card mb-5">
                            <div className="card-header bg-primary text-white">
                                <h2 className="h5 mb-0">Cadastrar Novo Evento</h2>
                            </div>
                            <div className="card-body" style={{backgroundColor: '#f8f9fa'}}>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="titulo">Título do Evento</label>
                                        <input
                                            type="text"
                                            name="titulo"
                                            id="titulo"
                                            placeholder="Ex: Festa Junina Beneficente"
                                            value={formData.titulo}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="data">Data</label>
                                                <input
                                                    type="date"
                                                    name="data"
                                                    id="data"
                                                    value={formData.data}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="local">Local</label>
                                                <input
                                                    type="text"
                                                    name="local"
                                                    id="local"
                                                    placeholder="Ex: Salão Paroquial"
                                                    value={formData.local}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="descricao">Descrição</label>
                                        <textarea
                                            name="descricao"
                                            id="descricao"
                                            placeholder="Detalhes sobre o evento, atrações, etc."
                                            value={formData.descricao}
                                            onChange={handleChange}
                                            rows="4"
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="imagem">Imagem do Evento</label>
                                        <br/> 
                                        <input
                                            type="file"
                                            name="imagem"
                                            id="imagem"
                                            accept="image/*"
                                            onChange={handleChange}
                                            className="form-control-file" 
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block mt-4"
                                    >
                                        Cadastrar Evento
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Status Message */}
                        {status.text && (
                            <div className={`alert alert-${status.type || 'warning'} alert-dismissible fade show my-4`} role="alert">
                                {status.text}
                                <button type="button" className="close" aria-label="Close" onClick={closeAlert}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        )}

                        {/* Lista de Eventos Cadastrados */}
                        <div className="mt-5">
                            <h2 className="h4 mb-4" style={{ color: '#007bff' }}>Eventos Cadastrados</h2>
                            {loadingEventos && (
                                <div className="text-center my-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Carregando...</span>
                                    </div>
                                </div>
                            )}
                            
                            {!loadingEventos && eventos.length === 0 && (
                                <div className="text-center p-4 border rounded bg-light">
                                    <p className="h5 mb-2 text-muted">Nenhum evento cadastrado.</p>
                                    <p className="text-muted small">Use o formulário acima para adicionar novos eventos.</p>
                                </div>
                            )}

                            {!loadingEventos && eventos.length > 0 && (
                                <ul className="list-group">
                                    {eventos.map(evento => (
                                        <li key={evento.id} className="list-group-item mb-3 shadow-sm">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1 text-primary">{evento.titulo}</h5>
                                                <small className="text-muted">{formatDate(evento.data)}</small>
                                            </div>
                                            <p className="mb-1 text-muted"><strong>Local:</strong> {evento.local}</p>
                                            {evento.descricao && (
                                                <p className="mb-2" style={{ whiteSpace: 'pre-line', fontSize: '0.9rem' }}>
                                                    {evento.descricao}
                                                </p>
                                            )}
                                            <div className="mt-2 d-flex justify-content-between align-items-center">
                                                {evento.imagem && (
                                                    <a
                                                        href={evento.imagem}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline-info btn-sm"
                                                    >
                                                        Ver Imagem
                                                    </a>
                                                )}
                                                <button
                                                    onClick={() => handleDelete(evento.id, evento.titulo)}
                                                    className="btn btn-danger btn-sm"
                                                    style={!evento.imagem ? { marginLeft: 'auto' } : {}}
                                                >
                                                    Excluir Evento
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}