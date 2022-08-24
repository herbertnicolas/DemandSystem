import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  console.log("ENTROU")

  let firebaseConfig = {
    apiKey: "AIzaSyACzKtnw8yWNlrjZH1NdLxl5suHfqLJZ4Y",
    authDomain: "demand-system.firebaseapp.com",
    projectId: "demand-system",
    storageBucket: "demand-system.appspot.com",
    messagingSenderId: "1053863475727",
    appId: "1:1053863475727:web:408907c68e6a5233ec017a",
    measurementId: "G-7YXKLK6WJJ"
};
  // Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;