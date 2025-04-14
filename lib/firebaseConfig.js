// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-AkKbi8c4CMoS3wxTaoOZWOkdmK2DRDg",
    authDomain: "ancianato-5e078.firebaseapp.com",
    projectId: "ancianato-5e078",
    storageBucket: "ancianato-5e078.firebasestorage.app",
    messagingSenderId: "1003285275555",
    appId: "1:1003285275555:web:cdf53a5bdddb461eb33016"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
