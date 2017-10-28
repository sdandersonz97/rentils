import { combineReducers } from 'redux'
import auth from '../auth/reducers'
import accouting from '../admin/reducers/accounting'
import rentals from '../admin/reducers/rentals'
import employees from '../admin/reducers/employees'
import selectedEmployee from './selectedEmployee'
import employeeRentals from '../employee/reducer/employeeRentals'
import employeeRents from '../employee/reducer/employeeRents'
import paymentNotes from '../employee/reducer/paymentsNotes'
import incomes from './incomes'
import expenses from './expenses'
const rootReducer = combineReducers({
    rentals,
    employees,
    auth,
    accouting,
    selectedEmployee,
    employeeRentals,
    employeeRents,
    incomes,
    expenses,
    paymentNotes
})

export default rootReducer