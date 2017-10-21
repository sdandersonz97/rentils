import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import RentalListMin from '../components/rentalListMin'
import { fetchCompanyRentals } from '../actions/rentals'
import { fetchCompanyEmployee } from '../actions/employees'
import { TableHeader } from '../../common'
class ProfileRentals extends Component {
    componentDidMount(){
        const { companyId, employeeId } = this.props.match.params
        this.props.fetchCompanyRentals(companyId)
        this.props.fetchCompanyEmployee(companyId, employeeId)
    }
    renderRentalsRows = rentalId => {
        const { rentalList } = this.props
        return(
            <tr key={rentalId}>
                <td>
                    {rentalList[rentalId].cod}
                </td>
                <td>
                    {rentalList[rentalId].address}
                </td>
                <td>
                    {rentalList[rentalId].available ? 'AVAILABLE' : 'RENTED'}
                </td>
            </tr>
        )
    }
    filterEmployeeAssigments = () => {
        const { employeesRentals } = this.props
        return Object.keys(employeesRentals).filter(assigment => employeesRentals[assigment].valid)
    }
    filterEmployeeRentals = () => {
        const { rentalList, employeesRentals } = this.props
        const assigmentsKeys = this.filterEmployeeAssigments() 
        const rentalsProfiles = []
        for ( const assigmentsKey of assigmentsKeys ){
            if(employeesRentals[assigmentsKey].rentalId in rentalList){
                rentalsProfiles.push(employeesRentals[assigmentsKey].rentalId)
            } 
        }
        return rentalsProfiles
    }
    renderTableHeader = () => <TableHeader titles={['COD','ADDRESS', 'DISPONIBILITY']}/>
    render(){
        const { rentalList, employeesRentals } = this.props
        const rentalsProfiles = this.filterEmployeeRentals()
        return(
            <RentalListMin
                renderTableHeader={this.renderTableHeader}
                render={() => rentalsProfiles.map(this.renderRentalsRows)}
            />
        )
    }
}


const mapStateToProps = ({ rentals, employees }) => {
    const { selectedEmployee } = employees
    return {
        rentalList: rentals.rentalList,
        employeesRentals: selectedEmployee.rentalsAssigned
    }
}

export default withRouter(connect(mapStateToProps,{ fetchCompanyEmployee, fetchCompanyRentals })(ProfileRentals))