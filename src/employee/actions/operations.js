import { expensesRef, employeeRef, incomesRef, paymentNoteRef, accountingRef, employeeActivity, rentsRef, rentalsRef } from '../../utils/firebaseHelpers'
import { FETCH_PAYMENTS_NOTES } from './types'
export const addCompanyExpense = (companyId, values) => 
    expensesRef(companyId).push(values)
    .then(() => updateAccountingCompany(companyId, values.mount, 'expenses'))
    .then(() => updateAccountingEmployee(companyId, values.uid, values.mount, 'expenses'))
    .then(() => updateAccountingRental(companyId, values.rentalId, values.mount, 'expenses'))
    .then(() => addEmployeeActivity(companyId, values.uid, { 
        type: 'EXPENSES', 
        message: `Expended $${values.mount} in ${values.description}` }))

export const addCompanyIncome = (companyId, values) => { 
    values.quantity = Number(values.quantity)
    incomesRef(companyId).push(values)
    .then(() => updateAccountingCompany(companyId, values.mount, 'incomes'))
    .then(() => updateAccountingEmployee(companyId, values.uid, values.mount, 'incomes'))
    .then(() => updatePaymentDate(companyId, values.rentalId, values.quantity))
    .then(() => updateAccountingRental(companyId, values.rentalId, values.mount, 'incomes'))
    .then(() => addEmployeeActivity(companyId, values.uid, { 
        type: 'PAYMENT', 
        message: `Payment from ${values.tenant} of $${values.mount} for ${values.quantity} months`}))
}

export const addPaymentNote = (companyId, values) => {
    const paymentNoteId = paymentNoteRef(companyId).push().key
    values.mount = parseFloat(values.mount)
    values.days = parseInt(values.days)
    values.valid = true
    paymentNoteRef(companyId).child(paymentNoteId).set(values)
    .then(() => addEmployeeActivity(companyId, values.uid, { 
        type: 'PAYMENT-NOTE', 
        message: `Payment Note from ${values.tenant} of $${values.mount} because ${values.description}`}))
    .then(() => addPaymentNoteToRent(companyId, values.rentalId, paymentNoteId))
    .then(() => updatePaymentDateByDays(companyId, values.rentalId, values.days))
}
export const completePaymentNote = (companyId, paymentNoteId) => {
    paymentNoteRef(companyId).child(paymentNoteId).update({ valid:false })
    .then(() => paymentNoteRef(companyId).child(paymentNoteId).once('value', snap => {
        addCompanyIncome(companyId, {
            mount: snap.val().mount + snap.val().rest, 
            quantity:1, 
            rentalId: snap.val().rentalId, 
            timestamp: Date.now(), 
            tenant: snap.val().tenant,
            uid:snap.val().uid,
            description: `Completed in two pays 1-$${snap.val().mount}, 2-$${snap.val().rest}` 
        })
        addPaymentNoteToRent(companyId, snap.val().rentalId, false)}
    ))
}
export const fetchPaymentsNotes = (companyId, uid) => dispatch => 
    paymentNoteRef(companyId).orderByChild('uid').equalTo(uid).on('value', snap => 
        dispatch({
            type: FETCH_PAYMENTS_NOTES,
            paymentsNotes: snap.val() ? snap.val() : {} 
        }))

const updatePaymentDate = (companyId, rentalId, months) => rentsRef(companyId).child(rentalId)
    .once('value', snap =>  
        rentsRef(companyId).child(rentalId).update({ paymentDate: snap.val().paymentDate + 1000 * 60 * 60 * 24 * 30 * months }))

const updatePaymentDateByDays = (companyId, rentalId, days) => rentsRef(companyId).child(rentalId)
    .once('value', snap =>  
    rentsRef(companyId).child(rentalId).update({ paymentDate: snap.val().paymentDate + 1000 * 60 * 60 * 24 * days }))

const addPaymentNoteToRent = (companyId, rentalId, paymentNote) => rentsRef(companyId).child(rentalId).update({ paymentNote }) 

const updateAccountingCompany = (companyId, mount, type) => accountingRef(companyId).child(type)
    .transaction(transaction => transaction += Number(mount))

const updateAccountingRental = (companyId, rentalId, mount, type) => rentalsRef(companyId).child(rentalId).child(type)
    .transaction(transaction => transaction += Number(mount))

const updateAccountingEmployee = (companyId, uid, mount, type) => employeeRef(companyId, uid).child(type)
    .transaction(transaction => transaction += Number(mount))

const addEmployeeActivity = (companyId, uid, activity) => employeeActivity(companyId, uid, activity).push(activity)
