import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCkS3PWJgPSWZ53GMwlcaPPa9rNgL5ZA-o",
  authDomain: "todoapp-64c18.firebaseapp.com",
  projectId: "todoapp-64c18",
  storageBucket: "todoapp-64c18.appspot.com",
  messagingSenderId: "994693477598",
  appId: "1:994693477598:web:9931fcbfb7b919d8a4fe4f",
  measurementId: "G-T18SL6R4DB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;