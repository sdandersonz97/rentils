import React from 'react'
import AdminApp from './App'
import Dashboard from './components/dashboard'
import RentalCreate from './components/rentalCreate'
import RentalList from './containers/rentalList'
import PrivateRoute from '../auth/components/privateRoute'
const Routes = () => {
    return (
        <AdminApp>
            <PrivateRoute path='/company/:companyId/admin/dashboard' component={Dashboard} />
            <PrivateRoute path='/company/:companyId/admin/rentals/new' component={RentalCreate} />
            <PrivateRoute exact path='/company/:companyId/admin/rentals' component={RentalList} />
        </AdminApp>
    )
}
export default Routes