
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.en.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


// apiKey: "AIzaSyDCn_SboqyqslzqUAmAvOCqxZXQiz2imTA",
// authDomain: "grocery-stock-90a1c.firebaseapp.com",
// projectId: "grocery-stock-90a1c",
// storageBucket: "grocery-stock-90a1c.appspot.com",
// messagingSenderId: "248861785202",
// appId: "1:248861785202:web:8716c4526900616e61d6eb"