import React, { Component } from 'react'
import { getCurrentUser } from './utils/firebaseHelpers'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Router from './router'
class App extends Component {
    render(){
        
        return (
            <Router/>
        )
    }
}
export default withRouter(connect()(App))