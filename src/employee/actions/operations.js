import { expensesRef, employeeRef, incomesRef, accountingRef } from '../../utils/firebaseHelpers'

export const addCompanyExpense = (companyId, values) => 
    expensesRef(companyId).push(values)
    .then(() => updateAccountingCompany(companyId, values.mount, 'expenses'))
    .then(() => updateAccountingEmployee(companyId, values.uid, values.mount, 'expenses'))

export const addCompanyIncome = (companyId, values) => { 
    values.quantity = Number(values.quantity)
    incomesRef(companyId).push(values)
    .then(() => updateAccountingCompany(companyId, values.mount, 'incomes'))
    .then(() => updateAccountingEmployee(companyId, values.uid, values.mount, 'incomes'))
}

const updateAccountingCompany = (companyId, mount, type) => accountingRef(companyId).child(type)
    .transaction(transaction => transaction += Number(mount))

const updateAccountingEmployee = (companyId, uid, mount, type) => employeeRef(companyId, uid).child(type)
    .transaction(transaction => transaction += Number(mount))


