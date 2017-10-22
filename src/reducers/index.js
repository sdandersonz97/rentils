import { combineReducers } from 'redux'
import auth from '../auth/reducers'
import accouting from '../admin/reducers/accounting'
import rentals from '../admin/reducers/rentals'
import employees from '../admin/reducers/employees'
import selectedEmployee from './selectedEmployee'
import employeeRentals from '../employee/reducer/employeeRentals'
import employeeRents from '../employee/reducer/employeeRents'
import incomes from './incomes'
const rootReducer = combineReducers({
    rentals,
    employees,
    auth,
    accouting,
    selectedEmployee,
    employeeRentals,
    employeeRents,
    incomes
})

export default rootReducer