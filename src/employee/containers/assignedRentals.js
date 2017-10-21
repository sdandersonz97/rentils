import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchAssignments } from '../actions/rentals'
import AssignedRentalListMin from '../components/assignedRentalsList'
import { TableHeader } from '../../common'

class AssignedRentals extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchAssignments(companyId, localStorage.getItem('token'))
    }
    renderRentalsRows = rentalId => {
        const { employeeRentals } = this.props
        return(
            <tr key={employeeRentals}>
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
                    ${employeeRentals[rentalId].min} - ${employeeRentals[rentalId].max}
                </td>
            </tr>
        )
    }
    renderTableHeader = () => <TableHeader titles={['COD','ADDRESS', 'DISPONIBILITY', 'Range']}/>
    render(){
        const { employeeRentals } = this.props
        return(
            <AssignedRentalListMin
                renderTableHeader={this.renderTableHeader}
                render={() => Object.keys(employeeRentals).map(this.renderRentalsRows)}
            />
        )
    }
}

const mapStateToProps = ({employeeRentals}) => {
    return { employeeRentals }
}
export default withRouter(connect(mapStateToProps, { fetchAssignments })(AssignedRentals))