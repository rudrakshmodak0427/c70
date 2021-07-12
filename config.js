import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCsMo9vYRpxIH1A4LHR5t_tQfu8-NAZDR4",
    authDomain: "wireless-library-1364d.firebaseapp.com",
    projectId: "wireless-library-1364d",
    storageBucket: "wireless-library-1364d.appspot.com",
    messagingSenderId: "928425819598",
    appId: "1:928425819598:web:65e7279effb3144dbfbf9f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();