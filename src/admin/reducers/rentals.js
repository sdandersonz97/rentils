import _ from 'lodash'
import { FETCH_COMPANY_RENTALS, FETCH_COMPANY_RENTAL, FETCH_RENT_INFO } from '../actions/types'


const INITIAL_STATE = {
    rentalList: {},
    rentalsTotal: 0,
    rentalsAvailable: 0,
    selectedRental: {
        rentInfo: {}
    }
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
                selectedRental: {
                    ...state.selectedRental,
                    ...action.rental
                }
            }
        case FETCH_RENT_INFO:
            return {
                ...state,
                selectedRental: { 
                    ...state.selectedRental,
                    rentInfo: action.rent
                }
            }
        default:
            return state
    }
}