import firebase from 'firebase'

export const CONFIG = {
    apiKey: "AIzaSyB5KKkoSog6nyGhYyVKXVY9l8JM0kgpofA",
    authDomain: "rent-12ae6.firebaseapp.com",
    databaseURL: "https://rent-12ae6.firebaseio.com",
    projectId: "rent-12ae6",
    storageBucket: "rent-12ae6.appspot.com",
    messagingSenderId: "309451122261"
  };

//database ref
const rootRef = () => firebase.database().ref()
export const rentalsRef = companyId => rootRef().child(`${companyId}/rentals`)


//auth helpers
export const getCurrentUser = () => firebase.auth().currentUser()
export const signInWithEmailAndPassword = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)
export const signOut = () => firebase.auth().signOut()
export const signUp = (email, password) => firebase.auth().createUserWithEmailAndPassword(email,password)