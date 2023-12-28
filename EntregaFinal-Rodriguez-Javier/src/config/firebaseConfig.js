import { initializeApp } from "firebase/app";
// se agrega paar la linea que agregamos al final.
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxEptZSkktpZzR1pMWUqT8u_zM4WLkrto",
  authDomain: "react-ecommerce-26870.firebaseapp.com",
  projectId: "react-ecommerce-26870",
  storageBucket: "react-ecommerce-26870.appspot.com",
  messagingSenderId: "425637929854",
  appId: "1:425637929854:web:551189113a1fb10f42092f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// configuracion extra, para evitar hacerlo en todos los archivos
export const db=getFirestore(app);
export const auth = getAuth(app);