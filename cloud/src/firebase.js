import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCKRJI3J2GRaCveeQSloYIO8Esgg43_c3k",
    authDomain: "storage-cloud-426d9.firebaseapp.com",
    projectId: "storage-cloud-426d9",
    storageBucket: "storage-cloud-426d9.appspot.com",
    messagingSenderId: "256582014565",
    appId: "1:256582014565:web:e1997e20b330e00ebfd88c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }