import React, { Component } from 'react'
import { connect } from 'react-redux'
import RentalForm from './rentalForm'
import { withRouter } from 'react-router-dom'
import { addCompanyRental } from '../actions/rentals'
import { Rental } from '../constructors'
class RentalCreate extends Component {
    state = { 
       newRental: new Rental('', 0, '', 0, 0, '')
    }
    onSubmit = e => {
        const { companyId } = this.props.match.params
        e.preventDefault()
        this.props.addCompanyRental(companyId, {...this.state.newRental})
        this.resetState()
    }
    resetState = () => {
        this.setState({ newRental: new Rental('', 0, '', 0, 0, '')})
    }
    onInputChange = (input, value) => this.setState({ 
        ...this.state,
        newRental: { ...this.state.newRental, [input]:value }
    })
    render(){
        const { companyId } = this.props.match.params
        return(
            <RentalForm
                title='New Rental'
                category='Is time to create a new Rental'
                color='blue'
                values={this.state.newRental}
                onInputChange={this.onInputChange}
                onSubmit={this.onSubmit}
                cancelLink={`/company/${companyId}/admin/dashboard`}
            />
        )
    }
}

export default withRouter(connect(null, { addCompanyRental })(RentalCreate))