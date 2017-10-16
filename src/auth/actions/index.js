import { signInWithEmailAndPassword, usersRef, createUserWithEmailAndPassword, companyRef } from '../../utils/firebaseHelpers'
import { AUTH_USER, UNAUTH_USER, ERROR } from './types'

export const authUser = ({ email,password }, cb) => dispatch => 
    signInWithEmailAndPassword(email,password)
        .then(user => {
            dispatch({
                type: AUTH_USER
            })
            isAdmin(cb, user.uid)
        })
        .catch(error => {
            dispatch({
                type: ERROR,
                payload:error
            })
        })

const isAdmin = (cb, uid) => {
    let val 
    usersRef().child(uid)
        .once('value', snap => {
            val = { 
                isAdmin: snap.val().admin,
                companyId: snap.val().companyId
            }
        })
        .then(() => {
            const index = `${val.isAdmin ? `/company/${val.companyId}/admin` : `/company/${val.companyId}/user`}`
            cb(index)
        })
} 


export function signupCompany({ email, password }, cb){
    return dispatch => {
        createUserWithEmailAndPassword(email,password)
            .then(({ uid }) => registerCompany(uid))
            .then(() => alert(`Sign Up succesfully`))
            .then(() => cb)
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
                })
            })
    }
}
function registerCompany(uid){
    const companyId = companyRef().push().key
    return dispatch => {
        companyRef().child(companyId).set({
            accounting:{
                expenses:0,
                profits:0,
                incomes:0
            }
        })
        usersRef().child(uid).set({
                admin: true              
        })
    } 
}