import { incomesRef } from '../../utils/firebaseHelpers'
import { FETCH_COMPANY_INCOMES } from '../../actions/types' 

export const fetchCompanyIncomes = (companyId, uid) => dispatch =>
    incomesRef(companyId).orderByChild('uid').equalTo(uid).on('value', snap => 
    dispatch({
        type: FETCH_COMPANY_INCOMES,
        incomes: snap.val()
    })
)