import React, { Component } from 'react'
import AuthForm from './authForm'
import { signupCompany } from '../actions'
import { connect } from 'react-redux'
import { styles } from '../styles/style'
import Nav from '../../public/components/nav'
class SignupForm extends Component {
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
            this.props.signupCompany({ email, password })
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
            <section style={styles.sectionStyle}>
                <div style={{ flexDirection: 'row', width:'100%' }}>
                    <Nav/>
                </div>
                <AuthForm
                    email={email}
                    password={password}
                    confirmPassword={confirmPassword}
                    onInputChange={this.onInputChanges}
                    onSubmit={this.onSubmit}
                    signup
                />
            </section>
        )
    }
}
export default connect(null, { signupCompany })(SignupForm)