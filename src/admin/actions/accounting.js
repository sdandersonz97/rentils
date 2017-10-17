import { accountingRef } from '../../utils/firebaseHelpers'
import { FETCH_COMPANY_ACCOUNTING } from './types'

export const fetchCompanyAccounting = companyId => dispatch => 
    accountingRef(companyId).on('value', snap => dispatch({
        type: FETCH_COMPANY_ACCOUNTING,
        accounting: snap.val()
    }))
