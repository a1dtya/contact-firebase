
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBoa4HE123QxAqI2r67AVj8ON9GPz_YF0E",
  authDomain: "test-contact-1-a1860.firebaseapp.com",
  projectId: "test-contact-1-a1860",
  storageBucket: "test-contact-1-a1860.firebasestorage.app",
  messagingSenderId: "447689335503",
  appId: "1:447689335503:web:02596367bab74a908f0dba",
  measurementId: "G-NXVPX8LY5Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
