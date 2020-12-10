import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL-tKQa8-w_iV8BdN8imybUVmwyzieA70",
  authDomain: "atividade-uniacademia.firebaseapp.com",
  databaseURL: "https://atividade-uniacademia.firebaseio.com",
  projectId: "atividade-uniacademia",
  storageBucket: "atividade-uniacademia.appspot.com",
  messagingSenderId: "852588059175",
  appId: "1:852588059175:web:c48bc6704f2a9979174c02",
  measurementId: "G-LT5C4MMYWH"
  };
  // Initialize Firebase

  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;