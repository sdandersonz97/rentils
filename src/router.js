import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import App from './public/App'
import LoginForm from './auth/components/loginForm'
import SignupForm from './auth/components/signupForm'
import { initFirebase, getCurrentUser } from './utils/firebaseHelpers'
import { AUTH_USER } from './auth/actions/types'
import { connect } from 'react-redux'

const Router = () =>{
    return (
        <Switch>
            <Route path='/signup' component={SignupForm}/>
            <Route path='/login' component={LoginForm} />
            <Route path='/' component={App}/>
        </Switch>
    )
    
}
export default Router