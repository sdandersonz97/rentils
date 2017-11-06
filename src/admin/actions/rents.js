import { rentsRef } from '../../utils/firebaseHelpers'
import { FETCH_RENT_INFO } from './types'


export const fetchRentInfo = (companyId, rentalId) => dispatch => 
    rentsRef(companyId).child(rentalId).on('value', snap => 
        dispatch({
            type: FETCH_RENT_INFO,
            rent: snap.val() ? snap.val() : {}
        }))
