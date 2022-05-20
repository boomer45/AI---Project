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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}