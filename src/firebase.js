import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAqp0fj3D6-cTtvyRhlbQ-W9bAp14yMQoA",
    authDomain: "app-react-gabriel.firebaseapp.com",
    projectId: "app-react-gabriel",
    storageBucket: "app-react-gabriel.appspot.com",
    messagingSenderId: "266134158320",
    appId: "1:266134158320:web:e0a53506be3bcd63337b35"
  };
  
  
 let fireDb =  firebase.initializeApp(firebaseConfig);

 export default fireDb.database().ref()