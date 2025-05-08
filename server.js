const express = require('express');
const multer = require('multer');
const axios = require('axios');
const admin = require('firebase-admin');
const cors = require('cors');
const fs = require('fs');

// Firebase config
const serviceAccount = require('./firebaseServiceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

// Express + Multer
const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.post('/eventos', upload.single('imagem'), async (req, res) => {
    try {
        const { titulo, data, local, descricao } = req.body;
        const imagem = req.file;

        // Upload para Imgur
        const imgurResponse = await axios.post(
            'https://api.imgur.com/3/image',
            {
                image: fs.readFileSync(imagem.path, { encoding: 'base64' }),
                type: 'base64',
            },
            {
                headers: {
                    Authorization: 'Client-ID 546f2f2d4bb9358', // Client ID de testes
                },
            }
        );

        const imageUrl = imgurResponse.data.data.link;

        // Salvar no Firebase
        await db.collection('eventos').add({
            titulo,
            data,
            local,
            descricao,
            imagem: imageUrl,
            criadoEm: new Date(),
        });

        res.status(200).json({ sucesso: true, imagem: imageUrl });
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao salvar evento' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
