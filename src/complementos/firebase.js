// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRv9j_Hf5y7vkbrcvizaANLNKdmE0JBw0",
    authDomain: "tienda-tu-maquina-235fe.firebaseapp.com",
    projectId: "tienda-tu-maquina-235fe",
    storageBucket: "tienda-tu-maquina-235fe.appspot.com",
    messagingSenderId: "263659462282",
    appId: "1:263659462282:web:55d8c3292aa533c8069773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)