import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './public/App'
import LoginForm from './auth/components/loginForm'
import SignupForm from './auth/components/signupForm'
import { initFirebase } from './utils/firebaseHelpers'
class Router extends Component {
    componentDidMount(){
        initFirebase()
    }
    render(){
        return (
            <Switch>
                <Route path='/signup' component={SignupForm}/>
                <Route path='/login' component={LoginForm} />
                <Route path='/' component={App}/>
            </Switch>
        )
    }
}
export default Router