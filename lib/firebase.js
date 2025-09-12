import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdM08fktsmmK-JTjA5Rlb2ECPrQKnC210",
  authDomain: "cars-1d834.firebaseapp.com",
  projectId: "cars-1d834",
  storageBucket: "cars-1d834.firebasestorage.app",
  messagingSenderId: "84760715282",
  appId: "1:84760715282:web:c3c20abcd6a29c2bd9b8cb",
  measurementId: "G-Q4XQYRH4BM"
};

const app = initializeApp(firebaseConfig);
const firebasedb = getFirestore(app);

export { firebasedb };