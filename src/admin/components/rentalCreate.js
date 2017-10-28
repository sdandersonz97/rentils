import React, { Component } from 'react'
import { connect } from 'react-redux'
import RentalForm from './rentalForm'
import RentForm from './rentForm'
import EmployeeListMin from './employeeListMin'
import { withRouter } from 'react-router-dom'
import { addCompanyRental } from '../actions/rentals'
import { addCompanyRent } from '../../actions'
import { fetchCompanyEmployees, addAssignment } from '../actions/employees'
import { Rental, Rent } from '../constructors'
class RentalCreate extends Component {
    state = { 
       newRent: new Rent(0,'',''),
       isRented: false,
       selectedEmployee: '',
       screen: 'RentalForm'
    }
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchCompanyEmployees(companyId)
    }
    onSubmit = e => {
        const { companyId } = this.props.match.params
        const { addCompanyRental } = this.props
        const { newRental, isRented } = this.state
        e.preventDefault()
        const rentalId = addCompanyRental(companyId, {...newRental})
        isRented && this.onSaveRent(rentalId)
        this.resetState()
    }
    onSaveRent = rentalId => {
        const { companyId } = this.props.match.params
        const { addAssignment } = this.props
        const { newRent, selectedEmployee } = this.state
        addCompanyRent(companyId, {...newRent, rentalId, uid: selectedEmployee })
        addAssignment(companyId, selectedEmployee, [rentalId])
    }
    resetState = () => {
        this.setState({ 
            newRental: new Rental('', 0, '', 0, 0, ''),
            newRent: new Rent('',0,'',''),
            isRented: false,
            screen: 'RentalSaved'
        })
    }
    renderEmployeeRows = employeeId => {
        const { employeesList } = this.props
        const { selectedEmployee } = this.state
        return(
            <tr key={employeeId}>
                <td>
                    <input type='radio' value={employeeId} onClick={this.onSelectEmployee} checked={selectedEmployee === employeeId}/>
                </td>
                <td>
                    {employeesList[employeeId].cod}
                </td>
                <td>
                    {employeesList[employeeId].fullname}
                </td>
                <td>
                    {employeesList[employeeId].rentals}
                </td>
            </tr>
        )
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
    onSelectEmployee = e => {
        this.setState({ selectedEmployee: e.target.value })
    }
    render(){
        const { companyId } = this.props.match.params
        const { newRent, newRental, isRented, screen } = this.state
        const { employeesList } = this.props
        return  screen === 'RentalForm'
            ? <RentalForm
                onScreenChange={this.onScreenChange}
            />
            :  screen === 'RentForm' 
                ? <RentForm           
                    onScreenChange={this.onScreenChange}
                />
                : screen === 'EmployeeList' 
                    ? <EmployeeListMin 
                            onClickChangeScreen={this.onScreenChange.bind(this, 'RentForm')} 
                            onSubmitAssignment={this.onSubmit}
                            render={() => 
                                Object.keys(employeesList)
                                    .map(this.renderEmployeeRows)}
                    />
                    : <div>rental Saved</div>}
}
const mapStateToProps = ({ employees }) => {
    return {
        employeesList: employees.employeesList
    }
}
export default withRouter(connect(mapStateToProps, { addCompanyRental, fetchCompanyEmployees, addAssignment })(RentalCreate))