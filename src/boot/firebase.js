import firebase from "firebase/app"
import "firebase/firestore"

const dotenv = require('dotenv');
dotenv.config();

console.log('process.env.API_KEY', process.env.API_KEY)
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

console.log(process.env.BASE_URL);
console.log(firebaseConfig.apiKey);
firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db
