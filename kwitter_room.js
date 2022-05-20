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
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "Insta_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Insta_page.html";
}
