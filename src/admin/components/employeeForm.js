import React, { Component } from 'react'
import AuthForm from '../../auth/components/authForm'
import { signupEmployee } from '../../auth/actions'
import { connect } from 'react-redux'
class EmployeeForm extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }
    onInputChanges = (input, value) => this.setState({ [input]: value })
    onSubmit = e => {
        const { email, password, confirmPassword } = this.state
        e.preventDefault()
        if(password === confirmPassword){
            this.props.signupEmployee({ email, password })
            this.setState({ 
                email: '',
                password: '',
                confirmPassword: ''
            })
        } else {
            this.setState({ 
                password: '',
                confirmPassword: ''
            })
        }
    }
    render(){
        const { email, password, confirmPassword } = this.state
        return(
            <AuthForm
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                onInputChange={this.onInputChanges}
                onSubmit={this.onSubmit}
                signup
            />
        )
    }
}
export default connect(null, { signupEmployee })(EmployeeForm)