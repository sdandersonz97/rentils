import { expensesRef, employeeRef, incomesRef, accountingRef, employeeActivity } from '../../utils/firebaseHelpers'

export const addCompanyExpense = (companyId, values) => 
    expensesRef(companyId).push(values)
    .then(() => updateAccountingCompany(companyId, values.mount, 'expenses'))
    .then(() => updateAccountingEmployee(companyId, values.uid, values.mount, 'expenses'))
    .then(() => addEmployeeActivity(companyId, values.uid, { 
        type: 'EXPENSES', 
        message: `Expended $${values.mount} in ${values.description}` }))

export const addCompanyIncome = (companyId, values) => { 
    values.quantity = Number(values.quantity)
    incomesRef(companyId).push(values)
    .then(() => updateAccountingCompany(companyId, values.mount, 'incomes'))
    .then(() => updateAccountingEmployee(companyId, values.uid, values.mount, 'incomes'))
    .then(() => addEmployeeActivity(companyId, values.uid, { 
        type: 'PAYMENT', 
        message: `Payment from ${values.tenant} of $${values.mount} for ${values.quantity} months`}))
}

const updateAccountingCompany = (companyId, mount, type) => accountingRef(companyId).child(type)
    .transaction(transaction => transaction += Number(mount))

const updateAccountingEmployee = (companyId, uid, mount, type) => employeeRef(companyId, uid).child(type)
    .transaction(transaction => transaction += Number(mount))

const addEmployeeActivity = (companyId, uid, activity) => employeeActivity(companyId, uid, activity).push(activity)
