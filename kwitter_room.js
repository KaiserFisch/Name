
//AÑADE TUS ENLACES DE FIREBASE
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

 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

    document.getElementById("user_name").innerHTML = "Bienvenido" + user_name;
   
    function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"addingRoomName"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div > <hr>";
      document.getElementById("output").innerHTML +=row;
      //Final del código
      });});}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location ="kwitter_page.html" ;
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="imdex.html";
}
  

