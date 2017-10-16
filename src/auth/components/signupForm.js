import React, { Component } from 'react'
import AuthForm from './authForm'
class SignupForm extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }
    onInputChanges = (input, value) => this.setState({ [input]: value })
    onSubmit = e => {
        e.preventDefault()
    }
    render(){
        const { email, password, confirmPassword } = this.state
        return(
            <AuthForm
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                onInputChange={this.onInputChanges}
                onSubmit={this.onSubmit.bind(this)}
                signup
            />
        )
    }
}
export default SignupForm