import { FETCH_COMPANY_RENTALS, FETCH_COMPANY_RENTAL } from './types'
import { rentalsRef } from '../../utils/firebaseHelpers'

export const addCompanyRental = (companyId, values, isRented) => () => {
    const RentalId = rentalsRef(companyId).push().key 
    rentalsRef(companyId).child(RentalId).set(values)
    return RentalId
}

export const fetchCompanyRental = (companyId, rentalId) => dispatch =>
    rentalsRef(companyId).child(rentalId).on('value', snap =>
        dispatch({
            type: FETCH_COMPANY_RENTAL,
            rental: snap.val() ? snap.val() : {}
        }))

export const fetchCompanyRentals = companyId => dispatch => 
    rentalsRef(companyId).on('value', snap => 
        dispatch({
            type: FETCH_COMPANY_RENTALS,
            rentals: snap.val() ? snap.val() : {}
        })) 
