import { FETCH_COMPANY_EMPLOYEE } from '../actions/types'

const INITIAL_STATE = {
        fullname:'',
        incomes:0,
        expenses:0,
        rents:0,
        rentals: 0,
        rentalsAssigned:{}
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_COMPANY_EMPLOYEE:
            return action.employee
        default:
            return state
    }
}