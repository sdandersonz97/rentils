import React, { Component } from 'react'
import AuthForm from './authForm'
class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }
    onInputChange = (input, value) => this.setState({ [input]: value })
    onSubmit = e => {
        e.preventDefault()
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
export default LoginForm