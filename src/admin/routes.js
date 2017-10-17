import React from 'react'
import AdminApp from './App'
import Dashboard from './components/dashboard'
import PrivateRoute from '../auth/components/privateRoute'
const Routes = () => {
    return (
        <AdminApp>
            <PrivateRoute path='/company/:companyId/admin/dashboard' component={Dashboard} />
        </AdminApp>
    )
}
export default Routes