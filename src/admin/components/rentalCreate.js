import React, { Component } from 'react'
import { connect } from 'react-redux'
import RentalForm from './rentalForm'
import { withRouter } from 'react-router-dom'
class RentalCreate extends Component {
    state = { 
        cod:'',
        cost: 0,
        address:'',
        max: 0,
        min: 0,
        description: ''
    }
    onSubmit = e => {
        e.preventDefault()
        this.resetState()
    }
    resetState = () => {
        this.setState({
            cod:'',
            cost: 0,
            address:'',
            max: 0,
            min: 0,
            description: ''
        })
    }
    onInputChange = (input, value) => this.setState({ [input]: value })
    render(){
        return(
            <RentalForm
                title='New Rental'
                category='Is time to create a new Rental'
                color='blue'
                values={this.state}
                onInputChange={this.onInputChange}
                onSubmit={this.onSubmit}
            />
        )
    }
}

export default withRouter(RentalCreate)