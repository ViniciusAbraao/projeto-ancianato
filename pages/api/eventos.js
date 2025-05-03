import { db } from "@/lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    try {
        const { titulo, data, local, descricao, imagemUrl } = req.body;

        if (!titulo || !data || !local || !descricao || !imagemUrl) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        // Salva o evento na coleção "eventos" do Firestore
        const docRef = await addDoc(collection(db, "eventos"), {
            titulo,
            data,
            local,
            descricao,
            imagem: imagemUrl, // ou "imagemUrl" se preferir manter o mesmo nome
        });

        console.log('✅ Evento salvo com ID:', docRef.id);

        res.status(200).json({ message: 'Evento salvo com sucesso!', id: docRef.id });

    } catch (err) {
        console.error('❌ Erro ao salvar evento:', err);
        res.status(500).json({ error: 'Erro interno no servidor.' });
    }
}
