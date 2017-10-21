import { FETCH_COMPANY_EMPLOYEES, FETCH_COMPANY_EMPLOYEE } from './types'
import { employeesRef, employeesAssigmentsRef, rentalsRef } from '../../utils/firebaseHelpers'

export const fetchCompanyEmployees = companyId => dispatch => 
    employeesRef(companyId).on('value', snap => {
        dispatch({
            type: FETCH_COMPANY_EMPLOYEES,
            employees:  snap.val() ? snap.val() : {}
        })
    })

export const fetchCompanyEmployee = (companyId, employeeId) => dispatch => 
    employeesRef(companyId).child(employeeId).on('value', snap => {
        dispatch({
            type: FETCH_COMPANY_EMPLOYEE,
            employee:  snap.val() ? snap.val() : {}
        })
    })

export const addAssignment = (companyId, employeeId, rentalsId) => () =>
    rentalsId.map(rentalId => {
        employeesAssigmentsRef(companyId, employeeId).push({
            rentalId,
            timestamp: Date.now(),
            valid: true
        })
        .then(() => rentalsRef(companyId).child(rentalId).update({ assigned: employeeId }))
        .then(() => employeesRef(companyId).child(employeeId).once('value', snap => 
            employeesRef(companyId).child(employeeId).update({ rentals: snap.val().rentals + 1 })
        ))
})
