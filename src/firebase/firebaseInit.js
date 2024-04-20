import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBCLfxfDGNJO9oIkDFJySmUJscdWgMXG8g",
    authDomain: "fiilms-demo-site.firebaseapp.com",
    projectId: "fiilms-demo-site",
    storageBucket: "fiilms-demo-site.appspot.com",
    messagingSenderId: "189080947280",
    appId: "1:189080947280:web:21b8c72ab51e9328a35f55"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  


  export default firebaseApp.firestore(); firebaseApp.storage();

  

 