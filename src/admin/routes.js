import React from 'react'
import AdminApp from './App'
import Dashboard from './components/dashboard'
import RentalCreate from './components/rentalCreate'
import PrivateRoute from '../auth/components/privateRoute'
const Routes = () => {
    return (
        <AdminApp>
            <PrivateRoute path='/company/:companyId/admin/dashboard' component={Dashboard} />
            <PrivateRoute path='/company/:companyId/admin/rentals/new' component={RentalCreate} />
        </AdminApp>
    )
}
export default Routes