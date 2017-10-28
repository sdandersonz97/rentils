import { FETCH_PAYMENTS_NOTES } from '../actions/types'

const INITIALSTATE={}
export default (state=INITIALSTATE, action) => {
    switch(action.type){
        case FETCH_PAYMENTS_NOTES:
            return action.paymentsNotes
        default:
            return state
    }
}