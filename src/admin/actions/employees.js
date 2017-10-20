import { FETCH_COMPANY_EMPLOYEES, FETCH_COMPANY_EMPLOYEE } from './types'
import { employeesRef } from '../../utils/firebaseHelpers'

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