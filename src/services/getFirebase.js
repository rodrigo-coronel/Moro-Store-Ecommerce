import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyAvsSrB5VEQbIderuZaL21jlNyYC5iDhq0",
  
    authDomain: "moro-store.firebaseapp.com",
  
    projectId: "moro-store",
  
    storageBucket: "moro-store.appspot.com",
  
    messagingSenderId: "853459186025",
  
    appId: "1:853459186025:web:0a09308fdceaf5e2a88df8"
  
  };
  
  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore() {
      return firebase.firestore(app)
  }