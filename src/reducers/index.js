import { combineReducers } from 'redux'
import auth from '../auth/reducers'
import accouting from '../admin/reducers/accounting'
const rootReducer = combineReducers({
    rentals: () => [],
    auth,
    accouting,
})

export default rootReducer