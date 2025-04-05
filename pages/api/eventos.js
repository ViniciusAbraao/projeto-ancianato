import fs from 'fs';
import path from 'path';
import multer from 'multer';
import axios from 'axios';
import admin from 'firebase-admin';

// Firebase inicialização (só se ainda não estiver iniciado)
if (!admin.apps.length) {
    const serviceAccount = JSON.parse(
        fs.readFileSync(path.resolve(process.cwd(), 'firebaseServiceAccount.json'))
    );

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const db = admin.firestore();

// Configuração do multer (para upload multipart/form-data)
const upload = multer({ dest: '/tmp' });

export const config = {
    api: {
        bodyParser: false,
    },
};

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) return reject(result);
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await runMiddleware(req, res, upload.single('imagem'));

        const { titulo, data, local, descricao } = req.body;
        const imagem = req.file;

        try {
            const imgurResponse = await axios.post(
                'https://api.imgur.com/3/image',
                {
                    image: fs.readFileSync(imagem.path, { encoding: 'base64' }),
                    type: 'base64',
                },
                {
                    headers: {
                        Authorization: 'Client-ID 546f2f2d4bb9358',
                    },
                }
            );

            const imageUrl = imgurResponse.data.data.link;

            await db.collection('eventos').add({
                titulo,
                data,
                local,
                descricao,
                imagem: imageUrl,
                criadoEm: new Date(),
            });

            res.status(200).json({ sucesso: true, imagem: imageUrl });
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: 'Erro ao salvar evento' });
        }
    } else {
        res.status(405).json({ erro: 'Método não permitido' });
    }
}
