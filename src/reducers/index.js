import { combineReducers } from 'redux'
import auth from '../auth/reducers'
import accouting from '../admin/reducers/accounting'
import rentals from '../admin/reducers/rentals'
import employees from '../admin/reducers/employees'
const rootReducer = combineReducers({
    rentals,
    employees,
    auth,
    accouting,
})

export default rootReducer