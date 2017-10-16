import React, { Component } from 'react'
import { initFirebase, getCurrentUser } from './utils/firebaseHelpers'
import { AUTH_USER } from './auth/actions/types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Router from './router'
class App extends Component {
    componentWillMount(){
        initFirebase()
    }  
    componentWillReceiveProps(){
        if(getCurrentUser()){
            this.props.dispatch({
                type: AUTH_USER
            })
        }
    }
    render(){
        return (
            <Router/>
        )
    }
}
export default withRouter(connect()(App))