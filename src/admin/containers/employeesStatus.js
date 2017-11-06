import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchCompanyEmployees } from '../actions/employees'
import { CardStats, CardStatsBody, CardStatsFooter, CardStatsHeader } from '../../common'

class EmployeesStatus extends Component { 
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchCompanyEmployees(companyId)
    }
    render(){
        const { companyId } = this.props.match.params
        return(
            <div className='col-lg-6 col-md-6 col-sm-6'>
                <CardStats>
                    <CardStatsHeader icon='group' color='' />
                    <CardStatsBody title={this.props.employeesCount} category='Number of employees' />
                    <CardStatsFooter link urlFooter={`/company/${companyId}/admin/employees`}> See Details </CardStatsFooter>
                </CardStats>
            </div>
        )
    }
}
const mapStateToProps = ({ employees }) => {
    return {
        employeesCount: _.size(employees.employeesList)
    }
}
export default withRouter(connect(mapStateToProps,{ fetchCompanyEmployees })(EmployeesStatus))