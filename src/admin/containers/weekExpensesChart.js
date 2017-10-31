import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCompanyExpenses } from '../actions/accounting'
import { LineChart } from '../../common'
import { getWeekPayments } from '../../utils/helpers'
import moment from 'moment'
import { withRouter } from 'react-router-dom' 
class WeekExpensesChart extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchCompanyExpenses(companyId)
    }
    render(){
        return(
            <LineChart
                labels={['S', 'M', 'T', 'W', 'T', 'F','S']}
                data={this.props.weekExpenses}
                title='Daily expenses'
                cardColor='green'
            />
        )
    }
}
function mapStateToProps({ expenses }){
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return { 
        weekExpenses: getWeekPayments(expenses)
    }
}
export default withRouter(connect(mapStateToProps,{ fetchCompanyExpenses })(WeekExpensesChart))