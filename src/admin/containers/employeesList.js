import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardHeader, Table, TableBody, TableHeader, DropdownButton } from '../../common'
import { withRouter, Link } from 'react-router-dom'

class EmployeesList extends Component { 
    state={
        filter: 'all'
    }
    componentDidMount(){
        const { companyId } = this.props.match.params
    
    }
    onClickChangeFilter = filter => {
        this.setState({
            filter
        })
    }
    renderOptions = () => [
        { name:'best', onClick: () => this.onClickChangeFilter('best') },
        { name:'worst', onClick: () => this.onClickChangeFilter('worst') },
        { name:'All', onClick: () => this.onClickChangeFilter('all') }
    ]
    renderRows = uid => {
        const { employeeList } = this.props
        const { companyId } = this.props.match.params
        return(
            <tr key={uid}> 
                <td>
                    {employeeList[uid].id}
                </td>
                <td>
                    <Link to={`/company/${companyId}/admin/employees/employee/${uid}`}>{employeeList[uid].fullname}</Link>
                </td>
                <td>
                    {employeeList[uid].incomes}
                </td>
                <td>
                    {employeeList[uid].expenses}
                </td>
                <td>
                    {employeeList[uid].rentals}
                </td>
                <td>
                    {employeeList[uid].rents}
                </td>
            </tr>
        )
    }
    filterRentalList = () => {
      
    }
    render(){
        const { companyId } = this.props.match.params
        return( 
            <Card>
            <CardHeader title='Employees' category='All the Employees'/>                               
            <CardBody>
                <DropdownButton 
                    title='filter'
                    options={this.renderOptions()}
                />
                <Table>
                    <TableHeader titles={['COD','FULL NAME','INCOMES','EXPENSES','RENTALS','RENTS']}/>
                    <TableBody>
                    <tr> 
                        <td>
                           AB4
                        </td>
                        <td>
                            <Link to={`/company/${companyId}/admin/employees/employee/qwwe`}>STEVEN ANDERSON</Link>
                        </td>
                        <td>
                            $1000
                        </td>
                        <td>
                            $200
                        </td>
                        <td>
                            10
                        </td>
                        <td>
                            5
                        </td>
                    </tr>
                    </TableBody>
                </Table>
            </CardBody>
        </Card>
        )
    }
}

const mapStateToProps = ({ employees }) => {
    return {
        employeeList: employees.employeesList
    }
}
export default withRouter(connect()(EmployeesList))
