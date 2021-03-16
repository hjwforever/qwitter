import firebase from "firebase/app"
import "firebase/firestore"
require('dotenv').config()

const firebaseConfig = {
  // YOUR CONFIG BELOW ALL
  apiKey: process.env.API_KEY,
  authDomain: "qwitter-db663.firebaseapp.com",
  projectId: "qwitter-db663",
  storageBucket: "qwitter-db663.appspot.com",
  messagingSenderId: "462102939506",
  appId: "1:462102939506:web:bdba48534b7e3a23373feb",
  measurementId: "G-GE98D94DPF"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db
