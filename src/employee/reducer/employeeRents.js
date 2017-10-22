import { FETCH_COMPANY_RENTAL_RENT_EMPLOYEE } from '../actions/types'

const INITIALSTATE = {

}

export default (state=INITIALSTATE, action) => {
    switch(action.type){
        case FETCH_COMPANY_RENTAL_RENT_EMPLOYEE:
            return {...state, [action.rentalId]: action.rent }
        default:
            return state
    }
}