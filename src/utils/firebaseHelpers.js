import firebase from "firebase";

const CONFIG = {
  apiKey: "AIzaSyB5KKkoSog6nyGhYyVKXVY9l8JM0kgpofA",
  authDomain: "rent-12ae6.firebaseapp.com",
  databaseURL: "https://rent-12ae6.firebaseio.com",
  projectId: "rent-12ae6",
  storageBucket: "rent-12ae6.appspot.com",
  messagingSenderId: "309451122261"
};

export const initFirebase = () => firebase.initializeApp(CONFIG);

//database ref
export const rootRef = () => firebase.database().ref();
export const usersRef = () => rootRef().child("/users");
export const companyRef = () => rootRef().child("/companies");
export const rentalsRef = companyId =>
  companyRef().child(`${companyId}/rentals`);
export const accountingRef = companyId =>
  companyRef().child(`${companyId}/accounting`);
export const rentsRef = companyId => companyRef().child(`${companyId}/rents`);
export const employeesRef = companyId =>
  companyRef().child(`${companyId}/employees`);
export const employeeRef = (companyId, uid) =>
  employeesRef(companyId).child(uid);
export const employeesAssigmentsRef = (companyId, uid) =>
  employeesRef(companyId).child(`${uid}/rentalsAssigned`);
export const employeeActivity = (companyId, uid) =>
  employeesRef(companyId).child(`${uid}/activity`);
export const expensesRef = companyId =>
  companyRef().child(`${companyId}/expenses`);
export const incomesRef = companyId =>
  companyRef().child(`${companyId}/incomes`);
export const paymentNoteRef = companyId =>
  companyRef().child(`${companyId}/paymentNotes`);
//auth helpers
export const getCurrentUser = () => firebase.auth().currentUser;
export const signInWithEmailAndPassword = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
export const signOut = () => firebase.auth().signOut();
export const createUserWithEmailAndPassword = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
