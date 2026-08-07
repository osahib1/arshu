import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "arshu-9919.firebaseapp.com",
  projectId: "arshu-9919",
  storageBucket: "arshu-9919.firebasestorage.app",
  messagingSenderId: "629782428750",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn = document.getElementById("loginBtn");

btn.addEventListener("click", () => {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth,email,password)

    .then(() => {

        window.location.href="dashboard.html";

    })

    .catch((error)=>{

        alert(error.message);

    });

});