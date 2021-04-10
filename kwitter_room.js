
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCIgEYBGd80qh2ImmX3mVH9pPtYc5bFAVI",
  authDomain: "kwitter-project-98d57.firebaseapp.com",
  databaseURL: "https://kwitter-project-98d57-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-98d57",
  storageBucket: "kwitter-project-98d57.appspot.com",
  messagingSenderId: "259245664505",
  appId: "1:259245664505:web:97d5fcc8e88b7068bc5a28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+ "!!!!!!!!!!";

function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row= "<div class='room_name' id="+ Room_names+ "onclick='redirectToRoomName(this.id)'>Room="+ Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}