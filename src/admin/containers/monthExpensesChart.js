import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCompanyExpenses } from '../actions/accounting'
import { LineChart } from '../../common/'
import { withRouter } from 'react-router-dom'
import { getMonthlyPayments } from '../../utils/helpers'
class MonthlyExpensesChart extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchCompanyExpenses(companyId)
    }
    render(){
        return(
            <LineChart
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Agu','Sep','Oct','Nov','Dic']}
                data={this.props.monthlyExpenses}
            />
        )
    }
}
function mapStateToProps({ expenses }){
    const months=['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Agu','Sep','Oct','Nov','Dic']
    const yearAgo =  Date.now() - 1000*60*60*24 * 365 
    return { 
        monthlyExpenses: getMonthlyPayments(expenses)
    }
}
export default withRouter(connect(mapStateToProps,{ fetchCompanyExpenses })(MonthlyExpensesChart))