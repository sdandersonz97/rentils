import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCompanyIncomes } from '../actions/accounting'
import { LineChart } from '../../common/'
import { withRouter } from 'react-router-dom'
import { getMonthlyPayments } from '../../utils/helpers'
class MonthlyPaymentsChart extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchCompanyIncomes(companyId)
    }
    render(){
        return(
            <LineChart
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Agu','Sep','Oct','Nov','Dic']}
                data={this.props.monthlyPayments}
            />
        )
    }
}
function mapStateToProps({ incomes }){
    const months=['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Agu','Sep','Oct','Nov','Dic']
    const yearAgo =  Date.now() - 1000*60*60*24 * 365 
    return { 
        monthlyPayments: getMonthlyPayments(incomes)
    }
}
export default withRouter(connect(mapStateToProps,{ fetchCompanyIncomes })(MonthlyPaymentsChart))