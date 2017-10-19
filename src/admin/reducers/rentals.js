import _ from 'lodash'
import { FETCH_COMPANY_RENTALS, FETCH_COMPANY_RENTAL } from '../actions/types'


const INITIAL_STATE = {
    rentalList: {},
    rentalsTotal: 0,
    rentalsAvailable: 0,
    selectedRental: {}
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
        case FETCH_COMPANY_RENTAL:
            return {
                ...state,
                selectedRental: action.rental
            }
        default:
            return state
    }
}