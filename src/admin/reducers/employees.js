import _ from "lodash";
import {
  FETCH_COMPANY_EMPLOYEE,
  FETCH_COMPANY_EMPLOYEES
} from "../actions/types";

const INITIAL_STATE = {
  employeesList: {},
  employeesTotal: 0,
  selectedEmployee: {
    fullname: "",
    incomes: 0,
    expenses: 0,
    rents: 0,
    rentals: 0,
    rentalsAssigned: {}
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMPANY_EMPLOYEES:
      return {
        ...state,
        employeesList: action.employees,
        employeesTotal: _.size(action.rentals)
      };
    case FETCH_COMPANY_EMPLOYEE:
      return {
        ...state,
        selectedEmployee: { ...action.employee }
      };
    default:
      return state;
  }
};
