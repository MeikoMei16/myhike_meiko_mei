//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCdktZkqYJa2JIIrUS8OK5A5rcVHg9LunA",

    authDomain: "bby13-51f89.firebaseapp.com",

    projectId: "bby13-51f89",

    storageBucket: "bby13-51f89.firebasestorage.app",

    messagingSenderId: "48164634285",

    appId: "1:48164634285:web:e8d83d1fae93b262041024",

    measurementId: "G-JLJR7RRQST"

};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();