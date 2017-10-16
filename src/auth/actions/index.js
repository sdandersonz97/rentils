import { signInWithEmailAndPassword, usersRef } from '../../utils/firebaseHelpers'
import { AUTH_USER, UNAUTH_USER, ERROR } from './types'

export const authUser = ({ email,password }, cb) => dispatch => 
    signInWithEmailAndPassword(email,password)
        .then(user => {
            dispatch({
                type: AUTH_USER
            })

        })
        .catch(error => {
            dispatch({
                type: ERROR,
                payload:error
            })
        })

const isAdmin = cb => usersRef().child(user.uid)
    .once('value', snap => {
        const path = {
            isAdmin: snap.val().admin,
            companyUrl: snap.val().companyId
        }
        return path
    
    })
    .then(({ isAdmin, companyUrl }) => {
        const index = `${isAdmin ? `/company/${companyUrl}/admin` : `/company/${companyUrl}/user`}`
        cb(index)
    }) 
