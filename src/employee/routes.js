import React from 'react'
import EmployeeApp from './App'
import AssignedRentals from './containers/assignedRentals'
import PrivateRoute from '../auth/components/privateRoute'
import EmployeeDetails from './components/employeeDetails'
import RentalsToRent from './containers/rentalsToRent'
const Routes = () => {
    return (
        <EmployeeApp>
            <PrivateRoute exact path='/company/:companyId/user/profile' component={EmployeeDetails} />
            <PrivateRoute exact path='/company/:companyId/user/assignments' component={AssignedRentals} />
            <PrivateRoute exact path='/company/:companyId/user/rent' component={RentalsToRent} />
        </EmployeeApp>
    )
}
export default Routes