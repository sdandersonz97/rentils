import { FETCH_COMPANY_RENTALS } from '../actions/types'

const INITIAL_STATE = {}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_COMPANY_RENTALS:
            return action.rentals
        default:
            return state
    }
}