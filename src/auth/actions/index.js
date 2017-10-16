import { signInWithEmailAndPassword, usersRef } from '../../utils/firebaseHelpers'
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
