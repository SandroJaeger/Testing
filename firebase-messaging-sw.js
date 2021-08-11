importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-messaging.js');



var firebaseConfig = {

    apiKey: "AIzaSyDAs-cEPp31JPAmcwx0ikFOxo1lLWThi3g",

    authDomain: "racegame-301b3.firebaseapp.com",

    databaseURL: "https://racegame-301b3.firebaseio.com",

    projectId: "racegame-301b3",

    storageBucket: "racegame-301b3.appspot.com",

    messagingSenderId: "11748553538",

    appId: "1:11748553538:web:2a6788f91386f1158a4edb"

  };

  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();