// lib/getEvents.ts
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Evento } from "./types"; // ajuste o caminho conforme a estrutura do seu projeto

export async function getEventos(): Promise<Evento[]> {
    const eventosRef = collection(db, "eventos");
    const snapshot = await getDocs(eventosRef);
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Evento));
    console.log("Eventos carregados:", data); // <--- Debug
    return data;
}

