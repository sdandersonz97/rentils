import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAssignments } from '../actions/rentals'
import AssignedRentalListMin from '../components/assignedRentalsList'
import { TableHeader } from '../../common'
import { withRouter } from 'react-router-dom'
import ExpensesForm from '../components/expensesForm'
import IncomesForm from '../components/incomesForm'
import { addCompanyExpense, addCompanyIncome } from '../actions/operations'
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

    renderRentalsRows = rentalId => {
        const { employeeRentals } = this.props
        const { selectedRental } = this.state
        const disabled = employeeRentals[rentalId].available ? 'disabled' : ''
        return(
            <tr key={employeeRentals}>
                <td>
                    <button className='btn btn-danger' onClick={()=>this.onScreenChange('ExpensesForm', rentalId)}>EXPENSE</button> 
                    <button className={`btn btn-info ${disabled}`} onClick={()=>this.onScreenChange('PaymentsForm', rentalId)} >PAYMENT</button>
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
                        : <div> Saved </div> 
                    }
                </div>
            </section>
        )
    }
}
const mapStateToProps = ({ employeeRentals }) => {
    return {
        employeeRentals,
    }
}
export default withRouter(connect(mapStateToProps,{ fetchAssignments })(RentalsOperations))