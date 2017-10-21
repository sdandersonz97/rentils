import { rentsRef, rentalsRef, employeesRef } from '../../utils/firebaseHelpers'
import { FETCH_RENT_INFO, FETCH_COMPANY_EMPLOYEE } from './types'


export const addCompanyRent = (companyId, values, employeeId) => () => { 
    rentsRef(companyId).child(values.rentalId).set(values)
        .then(() => rentalsRef(companyId).child(values.rentalId)
            .update({ available: false }))
        .then(() => employeesRef(companyId).child(employeeId)
            .once('value', snap => 
                employeesRef(companyId).child(employeeId)
                    .update({ rents: snap.val().rents + 1 })
            )
        )
}

export const fetchRentInfo = (companyId, rentalId) => dispatch => 
    rentsRef(companyId).child(rentalId).on('value', snap =>{ 
        dispatch({
            type: FETCH_RENT_INFO,
            rent: snap.val() ? snap.val() : {}
        })
        employeesRef(companyId).child(snap.val().uid).on('value', snap => 
            dispatch({
                type: FETCH_COMPANY_EMPLOYEE,
                employee: snap.val() ? snap.val() : {}
            }))
    })
