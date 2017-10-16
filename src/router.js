import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './public/App'

class Router extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        )
    }
}
export default Router