
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBOH78Bkpomoj0FPo2oa89Pxky04yEAtc",
    authDomain: "projeto-teste-30db5.firebaseapp.com",
    projectId: "projeto-teste-30db5",
    storageBucket: "projeto-teste-30db5.appspot.com",
    messagingSenderId: "891438393939",
    appId: "1:891438393939:web:e8c6234de923d2bac8b4a6",
    measurementId: "G-T0KMCTLBF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
