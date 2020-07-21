import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkBpsgwLLHdVBXSvyPXY-rnQzt7UF53so",
    authDomain: "instagram-clone-react-23e49.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-23e49.firebaseio.com",
    projectId: "instagram-clone-react-23e49",
    storageBucket: "instagram-clone-react-23e49.appspot.com",
    messagingSenderId: "565930982689",
    appId: "1:565930982689:web:af880269373c100d3c1260",
    measurementId: "G-WB9WJL4Y0S"
});

const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

export{db,auth,storage};