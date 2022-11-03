import firebase from 'firebase/app';
// import firebase from 'firebase/compact/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBHSfsFzoDWqY1JhB-jjNZ1vQW6lOtxZso",
  
    authDomain: "olx-clone-9bd73.firebaseapp.com",
  
    projectId: "olx-clone-9bd73",
  
    storageBucket: "olx-clone-9bd73.appspot.com",
  
    messagingSenderId: "150325923488",
  
    appId: "1:150325923488:web:3a74caac7c0303d881c3c5",
  
    measurementId: "G-KGT77SZXCR"
  
  };

    // Use this to initialize the firebase App
 export default firebase.initializeApp(firebaseConfig);
// Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export default db ;