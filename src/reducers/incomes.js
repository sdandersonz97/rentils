import { FETCH_COMPANY_INCOMES } from '../actions/types'
const INITIALSTATE = {}
export default (state=INITIALSTATE, action) => {
    switch(action.type){
        case FETCH_COMPANY_INCOMES:
            return action.incomes
        default: 
            return state
    }
}