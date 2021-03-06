import {
  signInWithEmailAndPassword,
  usersRef,
  createUserWithEmailAndPassword,
  signOut,
  companyRef
} from "../../utils/firebaseHelpers";
import { AUTH_USER, UNAUTH_USER, ERROR } from "./types";

export const authUser = ({ email, password }, cb) => dispatch =>
  signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({
        type: AUTH_USER
      });
      localStorage.setItem("token", user.uid);
      isAdmin(cb, user.uid);
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      });
    });

const isAdmin = (cb, uid) => {
  let val;
  usersRef()
    .child(uid)
    .once("value", snap => {
      val = {
        isAdmin: snap.val().admin,
        companyId: snap.val().companyId
      };
    })
    .then(() => {
      const index = `${val.isAdmin
        ? `/company/${val.companyId}/admin/dashboard`
        : `/company/${val.companyId}/user/profile`}`;
      cb(index);
    });
};

export const signupCompany = ({ email, password }, cb) => dispatch =>
  createUserWithEmailAndPassword(email, password)
    .then(({ uid }) => registerCompany(uid))
    .then(() => alert(`Sign Up succesfully`))
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      });
    });

const registerCompany = uid => {
  const companyId = companyRef().push().key;
  companyRef()
    .child(companyId)
    .set({
      accounting: {
        expenses: 0,
        incomes: 0
      }
    });
  usersRef()
    .child(uid)
    .set({
      companyId,
      admin: true
    });
};

export const signupEmployee = (
  { companyId, email, password, fullname, cod },
  cb
) => dispatch =>
  createUserWithEmailAndPassword(email, password)
    .then(({ uid }) => registerEmployee(companyId, uid, fullname, cod))
    .then(() => alert(`Sign Up succesfully`))
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      });
    });

const registerEmployee = (companyId, uid, fullname, cod) => {
  companyRef()
    .child(companyId)
    .child(`employees/${uid}`)
    .set({
      cod,
      expenses: 0,
      incomes: 0,
      rentals: 0,
      rents: 0,
      fullname
    });
  usersRef()
    .child(uid)
    .set({
      companyId,
      admin: false
    });
};

export function unauthUser() {
  return dispatch => {
    signOut();
    localStorage.removeItem("token");
    dispatch({
      type: UNAUTH_USER
    });
  };
}
