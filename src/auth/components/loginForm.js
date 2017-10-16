import React, { Component } from 'react'
import AuthForm from './authForm'
import { authUser } from '../actions'
import { connect } from 'react-redux'
class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }
    onInputChange = (input, value) => this.setState({ [input]: value })
    onSubmit = e => {
        const { history, authUser } = this.props
        e.preventDefault()
        authUser(this.state, route => history.push(route))
        this.setState({ email: '', password: '' })
    }
    render(){
        const { email, password } = this.state
        return(
           <AuthForm
                email={email}
                password={password}
                onInputChange={this.onInputChange}
                onSubmit={this.onSubmit}
           />
        )
    }
}
export default connect(null, { authUser })(LoginForm)