import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCompanyRentals } from '../actions/rentals'
import { fetchCompanyEmployees, addAssignment } from '../actions/employees'
import RentalListMin from '../components/rentalListMin'
import EmployeeListMin from '../components/employeeListMin'
import { withRouter } from 'react-router-dom'
class RentalAssignment extends Component {
    state={
        screen:'rentals',
        rentalsChecked: [],
        selectedEmployee: '',
        select: false,

    }
    componentDidMount(){
        const { companyId } = this.props.match.params
        const { fetchCompanyEmployees, fetchCompanyRentals } = this.props
        fetchCompanyRentals(companyId)
        fetchCompanyEmployees(companyId)
    }
    onCheckBoxChange = e => {
        const { rentalsChecked } = this.state
        !rentalsChecked.find(element => element === e.target.value)
        ? this.setState({ rentalsChecked: [...rentalsChecked, e.target.value]})
        : this.setState({ rentalsChecked: rentalsChecked.filter(element => element !== e.target.value)})
        
    }
    onSubmitAssignment = () => {
        const { companyId } = this.props.match.params
        const { selectedEmployee, rentalsChecked } = this.state
        selectedEmployee && this.props.addAssignment(companyId, selectedEmployee, rentalsChecked)
        this.setState({
            screen:'saved'
        })
    }
    renderRentalsRows = rentalId => {
        const { rentalList } = this.props
        return(
            <tr key={rentalId}>
                <td>
                    <input type='checkbox' value={rentalId} onChange={this.onCheckBoxChange}/>
                </td>
                <td>
                    {rentalList[rentalId].cod}
                </td>
                <td>
                    {rentalList[rentalId].address}
                </td>
            </tr>
        )
    }
    onSelectEmployee = e => {
        this.setState({ selectedEmployee: e.target.value })
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
    onChangeScreen = screen => this.setState({ screen })
    render(){
        const { rentalList, employeesList } = this.props
        const { screen } = this.state
        return (
            <div>
                {screen === 'rentals'
                ? <RentalListMin 
                   onClickChangeScreen={this.onChangeScreen} 
                    render={() => 
                        Object.keys(rentalList)
                            .filter(rental => !rentalList[rental].assigned)
                            .map(this.renderRentalsRows)
                    }/>
                : screen === 'employees' 
                    ? <EmployeeListMin
                        onClickChangeScreen={this.onChangeScreen} 
                        onSubmitAssignment={this.onSubmitAssignment}
                        render={() => 
                            Object.keys(employeesList)
                                .map(this.renderEmployeeRows)
                    }/>
                    : <div> Saved </div>}
            </div>
        )
    }
}

const mapStateToProps = ({ employees, rentals }) => {
    const { rentalList } = rentals
    const { employeesList } = employees
    return {
        rentalList,
        employeesList
    }
}

export default withRouter(connect(mapStateToProps, { fetchCompanyEmployees, fetchCompanyRentals, addAssignment })(RentalAssignment))

