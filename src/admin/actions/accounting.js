import { accountingRef, incomesRef, expensesRef } from '../../utils/firebaseHelpers'
import { FETCH_COMPANY_ACCOUNTING } from './types'
import { FETCH_COMPANY_INCOMES, FETCH_COMPANY_EXPENSES } from '../../actions/types' 

export const fetchCompanyAccounting = companyId => dispatch => 
    accountingRef(companyId).on('value', snap => dispatch({
        type: FETCH_COMPANY_ACCOUNTING,
        accounting: snap.val()
    }))
   
export const fetchCompanyIncomes = (companyId, uid) => dispatch =>
    incomesRef(companyId).on('value', snap => 
    dispatch({
        type: FETCH_COMPANY_INCOMES,
        incomes: snap.val()
    }))

export const fetchCompanyExpenses = (companyId, uid) => dispatch =>
    expensesRef(companyId).on('value', snap => 
    dispatch({
        type: FETCH_COMPANY_EXPENSES,
        expenses: snap.val()
    }))
