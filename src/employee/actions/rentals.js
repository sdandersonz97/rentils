import { FETCH_COMPANY_RENTAL_EMPLOYEE } from './types'
import { rentalsRef, employeesAssigmentsRef } from '../../utils/firebaseHelpers'

const fetchCompanyEmployeeRentals = (companyId, rentalId, dispatch) => 
    rentalsRef(companyId).child(rentalId).on('value', snapRental => 
        dispatch({
            type: FETCH_COMPANY_RENTAL_EMPLOYEE,
            rental: snapRental.val(),
            rentalId
        }))

export const fetchAssignments = (companyId, uid) => dispatch =>
    employeesAssigmentsRef(companyId, uid)
        .orderByChild('valid')
        .equalTo(true)
        .on('child_added', snap =>
            fetchCompanyEmployeeRentals(companyId, snap.val().rentalId, dispatch)
    )
