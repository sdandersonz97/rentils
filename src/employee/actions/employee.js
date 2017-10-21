import { FETCH_COMPANY_EMPLOYEE } from './types'
import { employeesRef } from '../../utils/firebaseHelpers'


export const fetchCompanyEmployee = (companyId, uid) => dispatch => 
    employeesRef(companyId).child(uid).on('value', snap => 
        dispatch({
            type: FETCH_COMPANY_EMPLOYEE,
            employee: snap.val()
        })
)

