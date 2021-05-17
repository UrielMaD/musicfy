import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDOGlprX8cWobI70I5Cm7dNyOFpMDOXhbA",
    authDomain: "musicfy-6dc49.firebaseapp.com",
    projectId: "musicfy-6dc49",
    storageBucket: "musicfy-6dc49.appspot.com",
    messagingSenderId: "279502710882",
    appId: "1:279502710882:web:850ff1fd3b05014fc3c93b"
  };

  export default firebase.initializeApp(firebaseConfig);