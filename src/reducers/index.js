import { combineReducers } from 'redux'
import auth from '../auth/reducers'
import accouting from '../admin/reducers/accounting'
import rentals from '../admin/reducers/rentals'
const rootReducer = combineReducers({
    rentals,
    auth,
    accouting,
})

export default rootReducer