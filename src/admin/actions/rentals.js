import { FETCH_COMPANY_RENTALS, FETCH_COMPANY_RENTAL } from "./types";
import { rentalsRef } from "../../utils/firebaseHelpers";

export const addCompanyRental = (companyId, values) => () => {
  const rentalId = rentalsRef(companyId).push().key;
  values.cost = parseFloat(values.cost);
  values.min = parseFloat(values.min);
  values.max = parseFloat(values.max);
  values.assigned = false;
  values.available = true;
  values.incomes = 0;
  values.expenses = 0;
  rentalsRef(companyId)
    .child(rentalId)
    .set(values);
  return rentalId;
};

export const fetchCompanyRental = (companyId, rentalId) => dispatch =>
  rentalsRef(companyId)
    .child(rentalId)
    .on("value", snap =>
      dispatch({
        type: FETCH_COMPANY_RENTAL,
        rental: snap.val() ? snap.val() : {}
      })
    );

export const fetchCompanyRentals = companyId => dispatch =>
  rentalsRef(companyId).on("value", snap =>
    dispatch({
      type: FETCH_COMPANY_RENTALS,
      rentals: snap.val() ? snap.val() : {}
    })
  );
