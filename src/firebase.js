import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAOXh7blviD-y28kiXRANUmBRRxDAuOeGw",
    authDomain: "challenge-c5ae8.firebaseapp.com",
    databaseURL: "https://challenge-c5ae8.firebaseio.com",
    projectId: "challenge-c5ae8",
    storageBucket: "challenge-c5ae8.appspot.com",
    messagingSenderId: "582176173148",
    appId: "1:582176173148:web:29bc421c29fb28f14bca99",
    measurementId: "G-EMGB7GDS19"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const deb = firebaseApp.firestore();
const auth = firebase.auth();

export { deb, auth };