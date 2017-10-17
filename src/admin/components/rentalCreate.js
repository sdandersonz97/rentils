import React, { Component } from 'react'
import { connect } from 'react-redux'
import RentalForm from './rentalForm'
import { withRouter } from 'react-router-dom'
import { addCompanyRental } from '../actions/rentals'
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
        const { companyId } = this.props.match.params
        e.preventDefault()
        this.props.addCompanyRental(companyId, {...this.state})
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

export default withRouter(connect(null, { addCompanyRental })(RentalCreate))