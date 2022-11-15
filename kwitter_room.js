const firebaseConfig = {
    apiKey: "AIzaSyB2g6moY40pznPtgBd-OqlItWdcDVSmHpA",
    authDomain: "lets-chat-web-app-178cd.firebaseapp.com",
    projectId: "lets-chat-web-app-178cd",
    storageBucket: "lets-chat-web-app-178cd.appspot.com",
    messagingSenderId: "595164967030",
    appId: "1:595164967030:web:24dd57542910c246c2ef57"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("room_name-" + Room_names);
row = "<div class = "room_name" id = "+Room_names+" onclick = 'redirectToRoomName(this+id)' >#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirectToRoomName (name)
{
 console.log(name);
 localStorage.setItem("room_name" , room_name);
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location
}