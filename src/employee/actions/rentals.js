import {
  FETCH_COMPANY_RENTAL_EMPLOYEE,
  FETCH_COMPANY_RENTAL_RENT_EMPLOYEE
} from "./types";
import {
  rentalsRef,
  employeesAssigmentsRef,
  rentsRef
} from "../../utils/firebaseHelpers";

const fetchCompanyEmployeeRentals = (companyId, rentalId, dispatch) =>
  rentalsRef(companyId)
    .child(rentalId)
    .on("value", snapRental =>
      dispatch({
        type: FETCH_COMPANY_RENTAL_EMPLOYEE,
        rental: snapRental.val() ? snapRental.val() : {},
        rentalId
      })
    );
const fetchCompanyEmployeeRentalsRent = (companyId, rentalId, dispatch) =>
  rentsRef(companyId)
    .child(rentalId)
    .on("value", snapRent =>
      dispatch({
        type: FETCH_COMPANY_RENTAL_RENT_EMPLOYEE,
        rent: snapRent.val() ? snapRent.val() : {},
        rentalId
      })
    );
export const fetchAssignments = (companyId, uid) => dispatch =>
  employeesAssigmentsRef(companyId, uid)
    .orderByChild("valid")
    .equalTo(true)
    .on("child_added", snap => {
      fetchCompanyEmployeeRentals(companyId, snap.val().rentalId, dispatch);
      fetchCompanyEmployeeRentalsRent(companyId, snap.val().rentalId, dispatch);
    });
