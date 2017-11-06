import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardHeader, Table, TableBody, TableHeader, DropdownButton } from '../../common'
import { withRouter, Link } from 'react-router-dom'
import { fetchCompanyEmployees } from '../actions/employees'
class EmployeesList extends Component { 
    state={
        filter: 'all'
    }
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchCompanyEmployees(companyId)
    }
    onClickChangeFilter = filter => {
        this.setState({
            filter
        })
    }
    renderOptions = () => [
        { name:'Incomes', onClick: () => this.onClickChangeFilter('incomes') },
        { name:'Expenses', onClick: () => this.onClickChangeFilter('expenses') },
        { name:'Rentals', onClick: () => this.onClickChangeFilter('rentals') },
        { name:'Rents', onClick: () => this.onClickChangeFilter('rents') },
        { name:'All', onClick: () => this.onClickChangeFilter('all') }
    ]
    renderRows = uid => {
        const { employeesList } = this.props
        const { companyId } = this.props.match.params
        return(
            <tr key={uid}> 
                <td>
                    {employeesList[uid].cod}
                </td>
                <td>
                    <Link to={`/company/${companyId}/admin/employees/employee/${uid}`}>{employeesList[uid].fullname}</Link>
                </td>
                <td>
                    ${employeesList[uid].incomes}
                </td>
                <td>
                    ${employeesList[uid].expenses}
                </td>
                <td>
                    {employeesList[uid].rentals}
                </td>
                <td>
                    {employeesList[uid].rents}
                </td>
            </tr>
        )
    }
    getBestEmployee = () => {
        
    }
    filterEmployeesList = () => {
        const {  employeesList } = this.props
        const { filter } = this.state
        const employeesListKeys = Object.keys(employeesList)
        switch(filter){
            case 'all':
                return employeesListKeys
            case 'incomes':
                return employeesListKeys.sort((a,b) =>  employeesList[b].incomes - employeesList[a].incomes)
            case 'expenses':
                return employeesListKeys.sort((a,b) => employeesList[b].expenses - employeesList[a].expenses)
            case 'rentals':
                return employeesListKeys.sort((a,b) => employeesList[b].rentals - employeesList[a].rentals)
            case 'rents':
                return employeesListKeys.sort((a,b) => employeesList[b].rents - employeesList[a].rents)
        }
    }
    render(){
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
                    {this.filterEmployeesList().map(this.renderRows)}
                    </TableBody>
                </Table>
            </CardBody>
        </Card>
        )
    }
}

const mapStateToProps = ({ employees }) => {
    return {
        employeesList: employees.employeesList
    }
}
export default withRouter(connect(mapStateToProps,{ fetchCompanyEmployees })(EmployeesList))
