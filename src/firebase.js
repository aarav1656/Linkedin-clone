import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyCQ8vbsni7KMlRqennn1rXnhqISo8CbVNk",
    authDomain: "linkedin-clone1-e03bc.firebaseapp.com",
    projectId: "linkedin-clone1-e03bc",
    storageBucket: "linkedin-clone1-e03bc.appspot.com",
    messagingSenderId: "297248922986",
    appId: "1:297248922986:web:cf209a1429b22fdaaa1913",
    measurementId: "G-BBKHZ9CMZB"
  };

  
  const db = firebaseApp.firestore();
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  export { db, auth };