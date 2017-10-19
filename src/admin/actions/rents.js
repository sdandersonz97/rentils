import { rentsRef, rentalsRef } from '../../utils/firebaseHelpers'
import { FETCH_RENT_INFO } from './types'


export const addCompanyRent = (companyId, values) => () => { 
    rentsRef(companyId).child(values.rentalId).set(values)
        .then(() => rentalsRef(companyId).child(values.rentalId)
            .update({ available: false }))
}

export const fetchRentInfo = (companyId, rentalId) => dispatch => 
    rentsRef(companyId).child(rentalId).on('value', snap => 
    dispatch({
        type: FETCH_RENT_INFO,
        rent: snap.val() ? snap.val() : {}
    }))