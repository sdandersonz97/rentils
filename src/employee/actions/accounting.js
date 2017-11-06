import { incomesRef, expensesRef } from "../../utils/firebaseHelpers";
import {
  FETCH_COMPANY_INCOMES,
  FETCH_COMPANY_EXPENSES
} from "../../actions/types";

export const fetchCompanyIncomes = (companyId, uid) => dispatch =>
  incomesRef(companyId)
    .orderByChild("uid")
    .equalTo(uid)
    .on("value", snap =>
      dispatch({
        type: FETCH_COMPANY_INCOMES,
        incomes: snap.val() ? snap.val() : {}
      })
    );

export const fetchCompanyExpenses = (companyId, uid) => dispatch =>
  expensesRef(companyId)
    .orderByChild("uid")
    .equalTo(uid)
    .on("value", snap =>
      dispatch({
        type: FETCH_COMPANY_EXPENSES,
        expenses: snap.val() ? snap.val() : {}
      })
    );
