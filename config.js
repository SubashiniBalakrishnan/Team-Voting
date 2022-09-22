import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDVofJ6QhhTtDYJH-y6aeMBE-0LcZihNX8",
    authDomain: "team-voting-app-7ab62.firebaseapp.com",
    databaseURL: "https://team-voting-app-7ab62-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-7ab62",
    storageBucket: "team-voting-app-7ab62.appspot.com",
    messagingSenderId: "542750276251",
    appId: "1:542750276251:web:2c26d57b8bb3b77ca1e43e",
    measurementId: "G-MWBCSWKL34"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();