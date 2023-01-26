import { getAuth }  from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
//The keys to the firebase cloud storafe I have used.
const firebaseConfig = {
    apiKey: "AIzaSyC_4H0q7xR59Qc9i6WGc-4XeVzcZHirTNA",
    authDomain: "test123-897c9.firebaseapp.com",
    projectId: "test123-897c9",
    storageBucket: "test123-897c9.appspot.com",
    messagingSenderId: "894751236193",
    appId: "1:894751236193:web:4494f66e0af9c11444ca20",
    measurementId: "G-B95C639ME5"

};

//Initialises firebae within this application.
    const app = initializeApp(firebaseConfig);
    

 
     export const authentication = getAuth(app); //For authentication and checking what user is using the app.
     export const db = getFirestore(app); //For using any fuirestore features such as storing chat logs or Bills.


