// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2taO_tpwWwS2QNFrLn0hRVMgrP_XrcbY",
    authDomain: "ancianatotc-c048b.firebaseapp.com",
    projectId: "ancianatotc-c048b",
    storageBucket: "ancianatotc-c048b.firebasestorage.app",
    messagingSenderId: "426354959489",
    appId: "1:426354959489:web:20752c065598d7caee1980"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
