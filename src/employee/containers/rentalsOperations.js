import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAssignments } from '../actions/rentals'
import AssignedRentalListMin from '../components/assignedRentalsList'
import { TableHeader } from '../../common'
import { withRouter } from 'react-router-dom'
import ExpensesForm from '../components/expensesForm'
import IncomesForm from '../components/incomesForm'
import PaymentNoteForm from '../components/paymentsNotesForm'
import { dayLeft } from '../../utils/helpers'
import { DropdownButton, Card, CardBody } from '../../common'
class RentalsOperations extends Component {
    state={
        screen:'RentalList',
        selectedRental:'',
        savedMessage:''
    }
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchAssignments(companyId, localStorage.getItem('token'))
    }
    onSaved = savedMessage => this.setState({savedMessage})
    onScreenChange = (screen, selectedRental) => this.setState({ screen, selectedRental })
    renderOptions = rentalId => { 
        const { companyId } = this.props.match.params
        const { employeeRentals, employeeRents, history } = this.props
        if(employeeRentals[rentalId].available){
            return [
                { name:'EXPENSE', onClick: () => this.onScreenChange('ExpensesForm', rentalId)},
            ]
        } else if(employeeRents[rentalId]){
            if(employeeRents[rentalId].paymentNote){
                return [
                    { name:'EXPENSE', onClick: () => this.onScreenChange('ExpensesForm', rentalId)},
                    { name:'COMPLETE PAYMENT', onClick: () => 
                        history.push(`/company/${companyId}/user/paymentnotes/${employeeRents[rentalId].paymentNote}`)},
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
    renderTableHeader = () => <TableHeader titles={['SELECT','COD','ADDRESS', 'DISPONIBILITY', '']}/>
    render(){
        const { employeeRentals } = this.props
        const { selectedRental, screen, savedMessage } = this.state
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
                            onSaved={this.onSaved}
                        />
                        : screen === 'ExpensesForm' 
                        ? <ExpensesForm 
                            selectedRental={selectedRental}
                            onScreenChange={this.onScreenChange}
                            onSaved={this.onSaved}
                        />
                        : screen === 'PaymentNoteForm'
                        ? <PaymentNoteForm
                            selectedRental={selectedRental}
                            onScreenChange={this.onScreenChange}
                            onSaved={this.onSaved}
                        />
                        : <Card><CardBody>{savedMessage}</CardBody></Card>
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