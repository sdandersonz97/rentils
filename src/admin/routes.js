import React from 'react'
import AdminApp from './App'
import Dashboard from './components/dashboard'
import RentalCreate from './components/rentalCreate'
import RentalList from './containers/rentalList'
import RentalDetails from './components/rentalDetails'
import EmployeeForm from './components/employeeForm'
import EmployeesList from './containers/employeesList'
import ProfileDetails from './components/profileDetails'
import RentalAssignment from './containers/rentalAssignment'
import ProfileRentals from './containers/profileRentals'
import ExpensesList from './containers/ExpensesList'
import PrivateRoute from '../auth/components/privateRoute'
const Routes = () => {
    return (
        <AdminApp>
            <PrivateRoute exact path='/company/:companyId/admin/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/company/:companyId/admin/rentals/new' component={RentalCreate} />
            <PrivateRoute exact path='/company/:companyId/admin/rentals/assignments' component={RentalAssignment} />
            <PrivateRoute exact path='/company/:companyId/admin/rentals/rental/:rentalId' component={RentalDetails} />
            <PrivateRoute exact path='/company/:companyId/admin/rentals' component={RentalList} />
            <PrivateRoute exact path='/company/:companyId/admin/employees/new' component={EmployeeForm} />
            <PrivateRoute exact path='/company/:companyId/admin/employees/employee/:employeeId/rentals' component={ProfileRentals} />
            <PrivateRoute exact path='/company/:companyId/admin/employees/employee/:employeeId' component={ProfileDetails} />
            <PrivateRoute exact path='/company/:companyId/admin/employees' component={EmployeesList} />
            <PrivateRoute exact path='/company/:companyId/admin/expenses' component={ExpensesList} />
        </AdminApp>
    )
}
export default Routes