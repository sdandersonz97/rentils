import { FETCH_COMPANY_RENTALS } from './types'
import { rentalsRef } from '../../utils/firebaseHelpers'

export const addCompanyRental = (companyId, values) => () => 
    rentalsRef(companyId).push(values)


export const fetchCompanyRentals = companyId => dispatch => 
    rentalsRef(companyId).on('value', snap => 
        dispatch({
            type: FETCH_COMPANY_RENTALS,
            rentals: snap.val()
        })
)   