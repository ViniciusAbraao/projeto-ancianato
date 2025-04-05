// lib/getEvents.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function getEventos() {
    const eventosRef = collection(db, "eventos");
    const snapshot = await getDocs(eventosRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
