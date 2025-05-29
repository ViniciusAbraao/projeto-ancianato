// pages/api/eventos.js
import { db } from "@/lib/firebaseConfig";
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore"; // Added getDocs, doc, deleteDoc

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { titulo, data, local, descricao, imagemUrl } = req.body;

            if (!titulo || !data || !local || !descricao || !imagemUrl) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
            }

            const docRef = await addDoc(collection(db, "eventos"), {
                titulo,
                data,
                local,
                descricao,
                imagem: imagemUrl,
            });

            console.log('✅ Evento salvo com ID:', docRef.id);
            res.status(200).json({ message: 'Evento salvo com sucesso!', id: docRef.id });

        } catch (err) {
            console.error('❌ Erro ao salvar evento:', err);
            res.status(500).json({ error: 'Erro interno no servidor ao salvar evento.' });
        }
    } else if (req.method === 'DELETE') {
        try {
            const { id } = req.query; // Get event ID from query parameter

            if (!id) {
                return res.status(400).json({ error: 'ID do evento é obrigatório para exclusão.' });
            }

            const eventDocRef = doc(db, "eventos", id);
            await deleteDoc(eventDocRef);

            console.log('✅ Evento excluído com ID:', id);
            res.status(200).json({ message: 'Evento excluído com sucesso!', id });

        } catch (err) {
            console.error('❌ Erro ao excluir evento:', err);
            res.status(500).json({ error: 'Erro interno no servidor ao excluir evento.' });
        }
    } else if (req.method === 'GET') { // Handler to get all events
        try {
            const eventosRef = collection(db, "eventos");
            const snapshot = await getDocs(eventosRef);
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            res.status(200).json(data);
        } catch (err) {
            console.error('❌ Erro ao buscar eventos:', err);
            res.status(500).json({ error: 'Erro interno no servidor ao buscar eventos.' });
        }
    } else {
        res.setHeader('Allow', ['POST', 'DELETE', 'GET']);
        return res.status(405).json({ error: `Método ${req.method} não permitido` });
    }
}