import { FETCH_COMPANY_EXPENSES } from "../actions/types";
const INITIALSTATE = {};
export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case FETCH_COMPANY_EXPENSES:
      return action.expenses;
    default:
      return state;
  }
};
