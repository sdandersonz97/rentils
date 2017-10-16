import React from 'react'
import { Route, Switch} from 'react-router-dom'
import App from './public/App'
import LoginForm from './auth/components/loginForm'
import SignupForm from './auth/components/signupForm'
import AdminRoutes from './admin/routes'
import PrivateRoute from './auth/components/privateRoute'
const Router = () =>{
    return (
        <Switch>
            <Route path='/signup' component={SignupForm}/>
            <Route path='/login' component={LoginForm} />
            <PrivateRoute path="/company/:companyId/admin" component={AdminRoutes}/>
            <Route path='/' component={App}/>
        </Switch>
    ) 
}
export default Router