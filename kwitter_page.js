//TUS ANLACES DE FIREBASE

var firebaseConfig = {
      apiKey: "AIzaSyDTh1Yagy-B2blx61RvFqhMg16qVII_qpI",
      authDomain: "proyecto-8985b.firebaseapp.com",
      projectId: "proyecto-8985b",
      storageBucket: "proyecto-8985b.appspot.com",
      messagingSenderId: "555283589018",
      appId: "1:555283589018:web:4f6fe6f5f297496bcdfc23"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código

//Termina código
      } });  }); }
getData();

function send() {
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value= "";
}