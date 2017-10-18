import _ from 'lodash'
import { FETCH_COMPANY_RENTALS } from '../actions/types'


const INITIAL_STATE = {
    rentalList: {},
    rentalsTotal: 0,
    rentalsAvailable: 0,
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_COMPANY_RENTALS:
            return {
                ...state, 
                rentalList: action.rentals,
                rentalsTotal: _.size(action.rentals),
                rentalsAvailable: _.size(_.filter(action.rentals, rental => rental.available))
            }
        default:
            return state
    }
}