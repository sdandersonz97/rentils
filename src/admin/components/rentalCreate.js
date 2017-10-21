import React, { Component } from 'react'
import { connect } from 'react-redux'
import RentalForm from './rentalForm'
import RentForm from './rentForm'
import { withRouter } from 'react-router-dom'
import { addCompanyRental } from '../actions/rentals'
import { addCompanyRent } from '../actions/rents'
import { Rental, Rent } from '../constructors'
class RentalCreate extends Component {
    state = { 
       newRental: new Rental('', 0, '', 0, 0, ''),
       newRent: new Rent(0,'',''),
       isRented: false,
       screen: 'RentalForm'
    }
    onSubmit = e => {
        const { companyId } = this.props.match.params
        const { addCompanyRent, addCompanyRental } = this.props
        const { newRent, newRental, isRented } = this.state
        e.preventDefault()
        const rentalId = addCompanyRental(companyId, {...newRental})
        isRented && addCompanyRent(companyId, {...newRent, rentalId}) 
        this.resetState()
    }
    resetState = () => {
        this.setState({ 
            newRental: new Rental('', 0, '', 0, 0, ''),
            newRent: new Rent('',0,'',''),
            isRented: false,
            screen: 'RentalSaved'
        })
    }
    onRentalInputChange = (input, value) => this.setState({ 
        ...this.state,
        newRental: { ...this.state.newRental, [input]:value }
    })
    onRentInputChange = (input, value) => this.setState({ 
        ...this.state,
        newRent: { ...this.state.newRent, [input]:value }
    })
    onCheckboxChange = () => {
        this.setState({ isRented: !this.state.isRented })
    }
    onScreenChange = screen => {
        this.setState({ screen })
    }
    render(){
        const { companyId } = this.props.match.params
        const { newRent, newRental, isRented, screen } = this.state
        return  screen === 'RentalForm'
            ? <RentalForm
                title='New Rental'
                category='Is time to create a new Rental'
                color='blue'
                values={newRental}
                onInputChange={this.onRentalInputChange}
                isRented={isRented}
                onCheckboxChange={this.onCheckboxChange}
                onSubmit={this.onSubmit}
                onScreenChange={this.onScreenChange}
                cancelLink={`/company/${companyId}/admin/dashboard`}/>
            :  screen === 'RentForm' 
                ? <RentForm
                    title='Rent'
                    category={`The range to rent this Rental is $${newRental.min} - $${newRental.max}`}
                    color='blue'
                    values={newRent}
                    onInputChange={this.onRentInputChange}            
                    onSubmit={this.onSubmit}
                    onScreenChange={this.onScreenChange}
                    range={[newRental.min, newRental.max]}
                    cancelLink={`/company/${companyId}/admin/dashboard`}/>
                : <div>Rental Saved !</div>
    }
}

export default withRouter(connect(null, { addCompanyRental, addCompanyRent })(RentalCreate))