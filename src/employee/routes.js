import React from 'react'
import EmployeeApp from './App'
import AssignedRentals from './containers/assignedRentals'
import PrivateRoute from '../auth/components/privateRoute'
import EmployeeDetails from './components/employeeDetails'
import RentalsToRent from './containers/rentalsToRent'
import RentalsOperations from './containers/rentalsOperations'
import IncomeList from './containers/incomesList'
import ExpensesList from './containers/expensesList'
import PaymentNotesList from './containers/paymentNotesList'
import CompletePaymentNote from './containers/completePaymentNote'
const Routes = () => {
    return (
        <EmployeeApp>
            <PrivateRoute exact path='/company/:companyId/user/profile' component={EmployeeDetails} />
            <PrivateRoute exact path='/company/:companyId/user/assignments' component={AssignedRentals} />
            <PrivateRoute exact path='/company/:companyId/user/rent' component={RentalsToRent} />
            <PrivateRoute exact path='/company/:companyId/user/operations' component={RentalsOperations} />
            <PrivateRoute exact path='/company/:companyId/user/incomes' component={IncomeList} />
            <PrivateRoute exact path='/company/:companyId/user/expenses' component={ExpensesList} />
            <PrivateRoute exact path='/company/:companyId/user/paymentnotes/:paymentNoteId' component={CompletePaymentNote} />
            <PrivateRoute exact path='/company/:companyId/user/paymentnotes' component={PaymentNotesList} />
        </EmployeeApp>
    )
}
export default Routes