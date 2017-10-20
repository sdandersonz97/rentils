import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CardStats, CardStatsBody, CardStatsHeader, CardHeader } from '../../common'

class EmployeeInfo extends Component {
    componentDidMount(){
        const { companyId, ProfileId } = this.props.match.params 
    }
    render(){
        const { rental } = this.props 
        return(
            <div className="row">
                <div className="col-md-12">
                    <CardHeader title='Steven Anderson' style={{backgroundColor: '#1251c7', boxShadow: '3px 3px 3px #888888', borderRadius: 10}}/>
                    </div>
                <div className="col-md-6">
                    <CardStats>
                        <CardStatsHeader icon='assignment' iconColor='white' color='blue'/>
                        <CardStatsBody category='RENTALS ACTIVITY' title='5/5' />
                    </CardStats>
                </div>
                <div className="col-md-6">
                    <CardStats>
                        <CardStatsHeader icon='history' iconColor='white' color='purple'/>
                        <CardStatsBody category='RENTS HISTORY' title='20' />
                    </CardStats>
                </div>
                <div className="col-md-6">
                    <CardStats>
                        <CardStatsHeader icon='attach_money' iconColor='white' color='green'/>
                        <CardStatsBody category='INCOMES' title='$1000' />
                    </CardStats>
                </div>
                <div className="col-md-6">
                    <CardStats>
                        <CardStatsHeader icon='money_off' iconColor='white' color='red'/>
                        <CardStatsBody category='EXPENSES' title='$200' />
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
export default withRouter(connect()(EmployeeInfo))