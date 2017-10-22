import { FETCH_COMPANY_EMPLOYEE } from './types'
import { employeesRef, rentsRef, rentalsRef, rootRef } from '../utils/firebaseHelpers'


export const fetchCompanyEmployee = (companyId, uid) => dispatch => 
    employeesRef(companyId).child(uid).on('value', snap => 
        dispatch({
            type: FETCH_COMPANY_EMPLOYEE,
            employee: snap.val()
        })
    )

export const addCompanyRent = (companyId, values) =>  {
    const updates = {}
    updates[`/companies/${companyId}/rentals/${values.rentalId}/available/`] = false
    employeesRef(companyId).child(`${values.uid}/rents`).once('value', snap => {
        updates[`/companies/${companyId}/employees/${values.uid}/rents`] = 1 + snap.val()
    }
    ).then(() => rentsRef(companyId).child(values.rentalId).set(values)
        .then(() => rootRef().update(updates))
        .catch(er => console.log(er))
    )
    .catch(er => console.log(er))
}