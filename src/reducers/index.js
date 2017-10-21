import { combineReducers } from 'redux'
import auth from '../auth/reducers'
import accouting from '../admin/reducers/accounting'
import rentals from '../admin/reducers/rentals'
import employees from '../admin/reducers/employees'
import selectedEmployee from './selectedEmployee'
import employeeRentals from '../employee/reducer/employeeRentals'
const rootReducer = combineReducers({
    rentals,
    employees,
    auth,
    accouting,
    selectedEmployee,
    employeeRentals
})

export default rootReducer