import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CardStats, CardStatsBody, CardStatsHeader, CardHeader, CardStatsFooter } from '../../common'
import { fetchCompanyEmployee } from '../actions/employees'

class EmployeeInfo extends Component {
    componentDidMount(){
        const { companyId, employeeId } = this.props.match.params 
        this.props.fetchCompanyEmployee(companyId, employeeId)
    }
    render(){
        const { companyId, employeeId } = this.props.match.params 
        const { employee } = this.props 
        return(
            <div className="row">
                <div className="col-md-12">
                    <CardHeader title={employee.fullname} style={{backgroundColor: '#1251c7', boxShadow: '3px 3px 3px #888888', borderRadius: 10}}/>
                    </div>
                <div className="col-md-6">
                    <CardStats>
                        <CardStatsHeader icon='assignment' iconColor='white' color='blue'/>
                        <CardStatsBody category='RENTALS ACTIVITY' title={`${employee.rentalsRented}/${employee.rentals}`} />
                        <CardStatsFooter link urlFooter={`/company/${companyId}/admin/employees/employee/${employeeId}/rentals`}>
                            See more
                        </CardStatsFooter>
                    </CardStats>
                </div>
                <div className="col-md-6">
                    <CardStats>
                        <CardStatsHeader icon='history' iconColor='white' color='purple'/>
                        <CardStatsBody category='RENTS HISTORY' title={employee.rents} />
                        <CardStatsFooter link urlFooter={`/company/${companyId}/admin/employees/employee/${employeeId}/rents`}>
                            See more
                        </CardStatsFooter>
                    </CardStats>
                </div>
                <div className="col-md-6">
                    <CardStats>
                        <CardStatsHeader icon='attach_money' iconColor='white' color='green'/>
                        <CardStatsBody category='INCOMES' title={`$${employee.incomes}`} />
                        <CardStatsFooter link urlFooter={`/company/${companyId}/admin/employees/employee/${employeeId}/incomes`}>
                            See more
                        </CardStatsFooter>
                    </CardStats>
                </div>
                <div className="col-md-6">
                    <CardStats>
                        <CardStatsHeader icon='money_off' iconColor='white' color='red'/>
                        <CardStatsBody category='EXPENSES' title={`$${employee.expenses}`} />
                        <CardStatsFooter link urlFooter={`/company/${companyId}/admin/employees/employee/${employeeId}/expenses`}>
                            See more
                        </CardStatsFooter>
                    </CardStats>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ employees }) => {
    return {
        employee: employees.selectedEmployee
    }
}
export default withRouter(connect(mapStateToProps, { fetchCompanyEmployee })(EmployeeInfo))