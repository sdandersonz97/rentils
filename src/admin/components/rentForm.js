import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Input, Table, TableBody, TableHeader } from '../../common'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addCompanyRent } from '../../actions'
import EmployeesListMin from './employeeListMin'
import { fetchCompanyRental } from '../actions/rentals'
import { fetchCompanyEmployees, addAssignment } from '../actions/employees'
class RentForm extends Component {
    state = {
        price: '',
        tenant: '',
        paymentDate: '',
        selectedEmployee: '',
        screen: 'RentForm'
    }
    componentDidMount(){
        const { companyId, rentalId } = this.props.match.params
        this.props.fetchCompanyRental(companyId, rentalId)
        this.props.fetchCompanyEmployees(companyId)
    }
    onInputChange = (input, value) => {
        this.setState({
            [input]: value
        })
    }
    onSubmit = (e) => {
        const { companyId, rentalId } = this.props.match.params
        const { price, tenant, paymentDate, selectedEmployee } = this.state
        const { addAssignment, history } = this.props
        e.preventDefault()
        addCompanyRent(companyId, { price, tenant, paymentDate, uid:selectedEmployee, rentalId })
        addAssignment(companyId, selectedEmployee, [rentalId] )
        history.push(`/company/${companyId}/admin/rentals/rental/${rentalId}`)
    }
    onSelectEmployee = ({ target }) => this.setState({ selectedEmployee: target.value })
    renderEmployeeRows = employeeId => {
        const { employees } = this.props
        const { selectedEmployee } = this.state
        return(
            <tr key={employeeId}>
                <td>
                    <input type='radio' value={employeeId} onClick={this.onSelectEmployee} checked={selectedEmployee === employeeId}/>
                </td>
                <td>
                    {employees[employeeId].cod}
                </td>
                <td>
                    {employees[employeeId].fullname}
                </td>
                <td>
                    {employees[employeeId].rentals}
                </td>
            </tr>
        )
    }
    onClickChangeScreen = screen => {
        const { price, tenant, paymentDate } = this.state
        const { rental } = this.props
        if(screen === 'EmployeeList' ){
            price >= rental.min && price <= rental.max && tenant && paymentDate
            ? this.setState({ screen })
            : alert('fill all the fields')
        } else {
            this.setState({ screen })
        }
        
        
    }
    render(){
        const { price, tenant, paymentDate, screen } = this.state
        const { rental, employees } = this.props
        return  <Card size='9'>
                    <CardHeader 
                        title='Rent'
                        category={`$${rental.min} - $${rental.max}`}
                        color=''
                    />
                    <CardBody>
                        <form onSubmit={this.onSubmit}>
                            { screen === 'RentForm' 
                                ? [<Input
                                    key='tenant'
                                    label='tenant'
                                    type='text'
                                    onChange={this.onInputChange.bind(this,'tenant')}
                                    value={tenant}
                                    required
                                    />,
                                <Input
                                    key='price'
                                    label='Price'
                                    type='number'
                                    onChange={this.onInputChange.bind(this,'price')}
                                    value={price}
                                    min={rental.min}
                                    max={rental.max}
                                    required
                                />,
                                <Input
                                    key='paymentDay'
                                    label='Payment Day'
                                    type='date'            
                                    onChange={this.onInputChange.bind(this,'paymentDate')}
                                    value={paymentDate}
                                    required
                                />,
                                <button 
                                    key='nextScreen'
                                    type='button' 
                                    onClick={() => this.onClickChangeScreen('EmployeeList')} 
                                    className='btn btn primary'
                                > 
                                    Next 
                                </button>]
                                :[<Table key='employeeTable'>
                                    <TableHeader titles={['SELECT', 'COD', 'FULL NAME', 'RENTALS']}/>
                                    <TableBody>
                                        { Object.keys(employees).map(this.renderEmployeeRows) }
                                    </TableBody>
                                </Table>,
                                <button 
                                    key='submitRent'
                                    type='submit'  
                                    className='btn btn primary' 
                                > 
                                    Save 
                                </button>,
                                <button 
                                    key='backToRentForm'
                                    type='button'  
                                    onClick={() => this.onClickChangeScreen('RentForm')}
                                    className='btn btn primary' 
                                > 
                                    Back
                                </button>]
                            } 
                            
                        </form>
                    </CardBody>
                </Card>
    }
}
const maptStateToProps = ({ rentals, employees }) => {
    return {
        rental: rentals.selectedRental,
        employees: employees.employeesList
    }
}
export default withRouter(connect(maptStateToProps, { fetchCompanyRental, fetchCompanyEmployees, addAssignment })(RentForm))