import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAssignments } from '../actions/rentals'
import AssignedRentalListMin from '../components/assignedRentalsList'
import { TableHeader } from '../../common'
import { withRouter } from 'react-router-dom'
import { Expense, Payment } from '../../utils/constructors'
import ExpensesForm from '../components/expensesForm'
import IncomesForm from '../components/incomesForm'
import { addCompanyExpense, addCompanyIncome } from '../actions/operations'
class RentalsOperations extends Component {
    state={
        payment: new Payment(0,'',localStorage.getItem('token'),'',0),
        expense: new Expense(0,'',localStorage.getItem('token'),''),
        screen:'RentalList',
        selectedRental:''
    }
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchAssignments(companyId, localStorage.getItem('token'))
    }
    onExpensesInputChange = (input, value) => this.setState({ 
        ...this.state,
        expense: { ...this.state.expense, [input]:value }
    })
    onQuantityChange = ( price, value ) => {
        value >= 0 && 
        this.setState({
            ...this.state,
            payment: { ...this.state.payment, mount: price * value, quantity: value }
        })
    }
    onSubmitExpenses = (e) => {
        e.preventDefault()
        const { expense, selectedRental } = this.state
        const { companyId } = this.props.match.params
        addCompanyExpense(companyId, {...expense, rentalId:selectedRental})
        this.resetExpenseState()
    }
    onSubmitPayment = (e) => {
        e.preventDefault()
        const { employeeRents } = this.props
        const { payment, selectedRental } = this.state
        const { companyId } = this.props.match.params
        addCompanyIncome(companyId, {
            ...payment, 
            rentalId: selectedRental, 
            tenant: employeeRents[selectedRental].tenant
        })
        this.resetIncomeState()
    }
    resetExpenseState = () => {
        this.setState({
            expense: new Expense(0,'',localStorage.getItem('token'),''),
            screen:'Saved',
            selectedRental:''
        })
    }
    resetIncomeState = () => {
        this.setState({
            payment: new Payment(0,'',localStorage.getItem('token'),'',0),
            screen:'Saved',
            selectedRental:''
        })
    }
    onClickChangeScreen = (screen, selectedRental) => this.setState({ screen, selectedRental })
    renderRentalsRows = rentalId => {
        const { employeeRentals } = this.props
        const { selectedRental } = this.state
        const disabled = employeeRentals[rentalId].available ? 'disabled' : ''
        return(
            <tr key={employeeRentals}>
                <td>
                    <button className='btn btn-danger' onClick={()=>this.onClickChangeScreen('ExpensesForm', rentalId)}>EXPENSE</button> 
                    <button className={`btn btn-info ${disabled}`} onClick={()=>this.onClickChangeScreen('PaymentsForm', rentalId)} >PAYMENT</button>
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
        const { employeeRentals, employeeRents } = this.props
        const { screen, payment, expense, selectedRental } = this.state
        return (
            <section className="content">
                <div className="container-fluid">
                    {screen === 'RentalList' 
                        ? <AssignedRentalListMin 
                            renderTableHeader={this.renderTableHeader}
                            render={() => Object.keys(employeeRentals).map(this.renderRentalsRows)
                            }
                        />
                        : screen === 'PaymentsForm' 
                            ? <IncomesForm
                                onInputChange={this.onIncomesInputChange}
                                onQuantityChange={this.onQuantityChange}
                                values={payment}
                                rentValues={employeeRents[selectedRental]}
                                onSubmit={this.onSubmitPayment}
                            />
                            : screen === 'ExpensesForm' 
                                ? <ExpensesForm 
                                    onInputChange={this.onExpensesInputChange}
                                    values={expense}
                                    onSubmit={this.onSubmitExpenses}
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