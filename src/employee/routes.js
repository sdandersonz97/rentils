import React from 'react'
import EmployeeApp from './App'
import AssignedRentals from './components/assignedRentals'
import PrivateRoute from '../auth/components/privateRoute'
const Routes = () => {
    return (
        <EmployeeApp>
            <PrivateRoute exact path='/company/:companyId/user/assignments' component={AssignedRentals} />
        </EmployeeApp>
    )
}
export default Routes