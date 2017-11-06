import { FETCH_COMPANY_RENTAL_EMPLOYEE } from "../actions/types";

const INITIALSTATE = {};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case FETCH_COMPANY_RENTAL_EMPLOYEE:
      return { ...state, [action.rentalId]: action.rental };
    default:
      return state;
  }
};
