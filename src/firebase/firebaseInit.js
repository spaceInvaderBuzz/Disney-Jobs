import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

//const firebaseConfig = {
//    apiKey: "AIzaSyBCLfxfDGNJO9oIkDFJySmUJscdWgMXG8g",
 //   authDomain: "fiilms-demo-site.firebaseapp.com",
 //   projectId: "fiilms-demo-site",
 //   storageBucket: "fiilms-demo-site.appspot.com",
 //   messagingSenderId: "189080947280",
  //  appId: "1:189080947280:web:21b8c72ab51e9328a35f55"
  //};
  const firebaseConfig = {
   apiKey: "AIzaSyAb9AI7AB-6S4PJapE3taZkUdGxGbFxbBU",
  authDomain: "disney-movie-stuff.firebaseapp.com",
  projectId: "disney-movie-stuff",
  storageBucket: "disney-movie-stuff.appspot.com",
  messagingSenderId: "62125872798",
  appId: "1:62125872798:web:7cf96edea696d2e1eb4d8f",
  };
  
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  


  export default firebaseApp.firestore(); firebaseApp.storage();

  

 