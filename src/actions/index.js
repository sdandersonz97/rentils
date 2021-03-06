import { FETCH_COMPANY_EMPLOYEE } from "./types";
import { addCompanyFirstPayment } from "../employee/actions/operations"
import {
  employeesRef,
  rentsRef,
  rootRef,
  employeeActivity
} from "../utils/firebaseHelpers";

export const fetchCompanyEmployee = (companyId, uid) => dispatch =>
  employeesRef(companyId)
    .child(uid)
    .on("value", snap =>
      dispatch({
        type: FETCH_COMPANY_EMPLOYEE,
        employee: snap.val()
      })
    );

export const addCompanyRent = (companyId, values) => {
  const updates = {};
  values.paymentDate = Date.parse(values.paymentDate);
  values.price = parseFloat(values.price);
  values.mount = parseFloat(values.mount)
  values.paymentNote = false;
  updates[
    `/companies/${companyId}/rentals/${values.rentalId}/available/`
  ] = false;
  employeesRef(companyId)
    .child(`${values.uid}/rents`)
    .once("value", snap => {
      updates[`/companies/${companyId}/employees/${values.uid}/rents`] =
        1 + snap.val();
    })
    .then(() =>
      rentsRef(companyId)
        .child(values.rentalId)
        .set(values)
        .then(() => rootRef().update(updates))
        .catch(er => console.log(er))
    )
    .then(() => addCompanyFirstPayment({ companyId, mount: values.mount, rentalId: values.rentalId, tenant: values.tenant, uid: values.uid }))
    .then(() => addEmployeeActivity())
    .catch(er => console.log(er));
};

const addEmployeeActivity = (companyId, uid, activity) =>
  employeeActivity(companyId, uid).push(activity);
