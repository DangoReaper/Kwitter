
var firebaseConfig = {
      apiKey: "AIzaSyAeIr21SPIpjAjUWJaBl7d9-KdAhXxYvjs",
      authDomain: "kwitter-f061f.firebaseapp.com",
      databaseURL: "https://kwitter-f061f-default-rtdb.firebaseio.com",
      projectId: "kwitter-f061f",
      storageBucket: "kwitter-f061f.appspot.com",
      messagingSenderId: "830508126239",
      appId: "1:830508126239:web:011aa72591c726d9e0052a",
      measurementId: "G-4R624J12QH"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
