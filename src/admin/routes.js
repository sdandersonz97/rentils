import React from 'react'
import AdminApp from './App'
import Dashboard from './components/dashboard'
import RentalForm from './components/rentalForm'
import RentForm from './components/rentForm'
import RentalList from './containers/rentalList'
import RentalDetails from './components/rentalDetails'
import Reports from './components/reports'
import EmployeeForm from './components/employeeForm'
import EmployeesList from './containers/employeesList'
import ProfileDetails from './components/profileDetails'
import RentalAssignment from './containers/rentalAssignment'
import ProfileRentals from './containers/profileRentals'
import ExpensesList from './containers/ExpensesList'
import IncomesList from './containers/IncomesList'
import Report from './containers/report'
import PrivateRoute from '../auth/components/privateRoute'
const Routes = () => {
    return (
        <AdminApp>
            <PrivateRoute exact path='/company/:companyId/admin/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/company/:companyId/admin/rentals/new' component={RentalForm} />
            <PrivateRoute exact path='/company/:companyId/admin/rentals/assignments' component={RentalAssignment} />
            <PrivateRoute exact path='/company/:companyId/admin/rentals/rental/:rentalId/rent' component={RentForm} />
            <PrivateRoute exact path='/company/:companyId/admin/rentals/rental/:rentalId' component={RentalDetails} />
            <PrivateRoute exact path='/company/:companyId/admin/rentals' component={RentalList} />
            <PrivateRoute exact path='/company/:companyId/admin/employees/new' component={EmployeeForm} />
            <PrivateRoute exact path='/company/:companyId/admin/employees/employee/:employeeId/rentals' component={ProfileRentals} />
            <PrivateRoute exact path='/company/:companyId/admin/employees/employee/:employeeId' component={ProfileDetails} />
            <PrivateRoute exact path='/company/:companyId/admin/employees' component={EmployeesList} />
            <PrivateRoute exact path='/company/:companyId/admin/expenses' component={ExpensesList} />
            <PrivateRoute exact path='/company/:companyId/admin/incomes' component={IncomesList} />
            <PrivateRoute exact path='/company/:companyId/admin/reports/:time' component={Report} />
            <PrivateRoute exact path='/company/:companyId/admin/reports' component={Reports} />
        </AdminApp>
    )
}
export default Routes