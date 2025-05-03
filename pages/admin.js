import { useState } from 'react';
import axios from 'axios';

export default function AdminPage() {
    const [formData, setFormData] = useState({
        titulo: '',
        data: '',
        local: '',
        descricao: '',
        imagem: null,
    });

    const [status, setStatus] = useState(null);

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
        setStatus('Enviando...');

        // Enviar imagem para o Imgur
        const imageData = new FormData();
        imageData.append('image', formData.imagem);

        try {
            // Substitua 'YOUR_CLIENT_ID' pelo seu Client-ID do Imgur
            const response = await axios.post('https://api.imgur.com/3/upload', imageData, {
                headers: {
                    Authorization: 'Client-ID 3d953add1e4524f', // Substitua com seu Client-ID do Imgur
                },
            });

            const imageUrl = response.data.data.link; // URL da imagem hospedada no Imgur

            // Agora você pode enviar o resto dos dados do evento para seu servidor
            const eventoData = {
                titulo: formData.titulo,
                data: formData.data,
                local: formData.local,
                descricao: formData.descricao,
                imagemUrl: imageUrl, // URL da imagem enviada para o Imgur
            };

            // Enviar os dados para o backend ou outro banco de dados
            await axios.post('/api/eventos', eventoData);

            setStatus('Evento enviado com sucesso!');
            setFormData({
                titulo: '',
                data: '',
                local: '',
                descricao: '',
                imagem: null,
            });
        } catch (err) {
            setStatus('Erro ao enviar o evento.');
            console.error(err);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow bg-white">
            <h1 className="text-2xl font-bold mb-4">Cadastrar Novo Evento</h1>
            <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                <input
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    value={formData.titulo}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="date"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="local"
                    placeholder="Local"
                    value={formData.local}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <textarea
                    name="descricao"
                    placeholder="Descrição"
                    value={formData.descricao}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="file"
                    name="imagem"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Enviar Evento
                </button>
            </form>
            {status && <p className="mt-4 text-center">{status}</p>}
        </div>
    );
}
