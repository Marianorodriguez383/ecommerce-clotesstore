import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRMWSOhklMh9SzsZmQMfpWa97YZnn0Gdc",
  authDomain: "ecommerce-reactapp-mrodriguez.firebaseapp.com",
  projectId: "ecommerce-reactapp-mrodriguez",
  storageBucket: "ecommerce-reactapp-mrodriguez.appspot.com",
  messagingSenderId: "685814149071",
  appId: "1:685814149071:web:36e3b53caceef9189a2cba",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
