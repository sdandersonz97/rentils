import { FETCH_COMPANY_ACCOUNTING } from '../actions/types'

const INITIAL_STATE = {
    incomes: 0,
    expenses: 0
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_COMPANY_ACCOUNTING:
            return action.accounting
        default:
            return state
    }
}