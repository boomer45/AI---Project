var firebaseConfig = {
    apiKey: "AIzaSyA2oDY2jlntmKaFrM464ktI58wBtTyY2bg",
    authDomain: "insta-8b0b6.firebaseapp.com",
    databaseURL: "https://insta-8b0b6-default-rtdb.firebaseio.com",
    projectId: "insta-8b0b6",
    storageBucket: "insta-8b0b6.appspot.com",
    messagingSenderId: "670928753515",
    appId: "1:670928753515:web:9d1a64de3bc6e51632f22e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}