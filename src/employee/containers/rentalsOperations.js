import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAssignments } from '../actions/rentals'
import AssignedRentalListMin from '../components/assignedRentalsList'
import { TableHeader } from '../../common'
import { withRouter } from 'react-router-dom'
import ExpensesForm from '../components/expensesForm'
import IncomesForm from '../components/incomesForm'
import PaymentNoteForm from '../components/paymentsNotesForm'
import { addCompanyExpense, addCompanyIncome } from '../actions/operations'
import { dayLeft } from '../../utils/helpers'
import { DropdownButton } from '../../common'
class RentalsOperations extends Component {
    state={
        screen:'RentalList',
        selectedRental:''
    }
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchAssignments(companyId, localStorage.getItem('token'))
    }
    onScreenChange = (screen, selectedRental) => this.setState({ screen, selectedRental })
    renderOptions = rentalId => { 
        const { employeeRentals, employeeRents } = this.props
        if(employeeRentals[rentalId].available){
            return [
                { name:'EXPENSE', onClick: () => this.onScreenChange('ExpensesForm', rentalId)},
            ]
        } else if(employeeRents[rentalId]){
            if(employeeRents[rentalId].paymentNote){
                return [
                    { name:'EXPENSE', onClick: () => this.onScreenChange('ExpensesForm', rentalId)},
                    { name:'COMPLETE PAYMENT', onClick: () => this.onScreenChange('ExpensesForm', rentalId)},
                ]
            } else {
                return[
                    { name:'EXPENSE', onClick: () => this.onScreenChange('ExpensesForm', rentalId)},
                    { name:'PAYMENT', onClick: () => this.onScreenChange('PaymentsForm', rentalId)},
                    { name:'PAYMENT NOTE', onClick: () => this.onScreenChange('PaymentNoteForm', rentalId)}
                ]
            }
        } else {
            return [
                { name:'EXPENSE', onClick: () => this.onScreenChange('ExpensesForm', rentalId)},
            ]
        } 
    }
    renderRentalsRows = rentalId => {
        const { employeeRentals, employeeRents } = this.props
        const { selectedRental } = this.state
        const disabled = employeeRentals[rentalId].available ? 'disabled' : ''
        return(
            <tr key={rentalId}>
                <td>
                <DropdownButton 
                    title='OPERATIONS'
                    options={this.renderOptions(rentalId)}
                />
                </td>
                <td>
                    {employeeRentals[rentalId].cod}
                </td>
                <td>
                    {employeeRentals[rentalId].address}
                </td>
                <td>
                    {employeeRentals[rentalId].available ? 'AVAILABLE' : 'RENTED'}
                </td>
                <td>
                    {employeeRents[rentalId] ? dayLeft(employeeRents[rentalId].paymentDate) : ''}
                </td>
            </tr>
        )
    }
    renderTableHeader = () => <TableHeader titles={['SELECT','COD','ADDRESS', 'DISPONIBILITY']}/>
    render(){
        const { employeeRentals } = this.props
        const { selectedRental, screen } = this.state
        return (
            <section className="content">
                <div className="container-fluid">
                    {screen === 'RentalList' 
                        ? <AssignedRentalListMin 
                            renderTableHeader={this.renderTableHeader}
                            render={() => Object.keys(employeeRentals).map(this.renderRentalsRows)}
                        />
                        : screen === 'PaymentsForm' 
                        ? <IncomesForm
                            selectedRental={selectedRental}
                            onScreenChange={this.onScreenChange}
                        />
                        : screen === 'ExpensesForm' 
                        ? <ExpensesForm 
                            selectedRental={selectedRental}
                            onScreenChange={this.onScreenChange}
                        />
                        : screen === 'PaymentNoteForm'
                        ? <PaymentNoteForm
                            selectedRental={selectedRental}
                            onScreenChange={this.onScreenChange}
                        />
                        : <div> Saved </div>
                    }
                </div>
            </section>
        )
    }
}
const mapStateToProps = ({ employeeRentals, employeeRents }) => {
    return {
        employeeRentals,
        employeeRents
    }
}
export default withRouter(connect(mapStateToProps,{ fetchAssignments })(RentalsOperations))