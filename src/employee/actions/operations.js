import { expensesRef, employeeRef, accountingRef } from '../../utils/firebaseHelpers'

export const addCompanyExpense = (companyId, values) => 
    expensesRef(companyId).push(values)
    .then(() => updateAccountingCompany(companyId, values.mount))
    .then(() => updateAccountingEmployee(companyId, values.uid, values.mount))

const updateAccountingCompany = (companyId, mount) => accountingRef(companyId).child('expenses')
    .transaction(expenses => expenses += Number(mount))

const updateAccountingEmployee = (companyId, uid, mount) => employeeRef(companyId, uid).child('expenses')
    .transaction(expenses => expenses += Number(mount))