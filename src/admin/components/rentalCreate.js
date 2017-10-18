import React, { Component } from 'react'
import { connect } from 'react-redux'
import RentalForm from './rentalForm'
import RentForm from './rentForm'
import { withRouter } from 'react-router-dom'
import { addCompanyRental } from '../actions/rentals'
import { Rental, Rent } from '../constructors'
class RentalCreate extends Component {
    state = { 
       newRental: new Rental('', 0, '', 0, 0, ''),
       newRent: new Rent('',0,'',''),
       isRented: false,
       screen: 'RentalForm'
    }
    onSubmit = e => {
        const { companyId } = this.props.match.params
        e.preventDefault()
        this.props.addCompanyRental(companyId, {...this.state.newRental})
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
    onInputChange = (form, input, value) => this.setState({ 
        ...this.state,
        [form]: { ...this.state.form, [input]:value }
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
        console.log(this.state)
        return  screen === 'RentalForm'
            ? <RentalForm
                title='New Rental'
                category='Is time to create a new Rental'
                color='blue'
                values={newRental}
                onInputChange={this.onInputChange.bind(this, 'newRental')}
                isRented={isRented}
                onCheckboxChange={this.onCheckboxChange}
                onSubmit={this.onSubmit}
                onScreenChange={this.onScreenChange}
                cancelLink={`/company/${companyId}/admin/dashboard`}/>
            :  screen === 'RentForm' 
                ? <RentForm
                    title='Rent'
                    category=''
                    color='blue'
                    values={newRent}
                    onInputChange={this.onInputChange.bind(this, 'newRent')}            
                    onSubmit={this.onSubmit}
                    onScreenChange={this.onScreenChange}
                    cancelLink={`/company/${companyId}/admin/dashboard`}/>
                : <div>Rental Saved !</div>
    }
}

export default withRouter(connect(null, { addCompanyRental })(RentalCreate))