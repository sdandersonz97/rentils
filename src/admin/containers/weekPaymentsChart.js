import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCompanyIncomes } from '../actions/accounting'
import { LineChart } from '../../common'
import { getWeekPayments } from '../../utils/helpers'
import moment from 'moment'
import { withRouter } from 'react-router-dom' 
class WeekPaymentsChart extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchCompanyIncomes(companyId)
    }
    render(){
        return(
            <LineChart
                labels={['S', 'M', 'T', 'W', 'T', 'F','S']}
                data={this.props.weekPayments}
                title='Daily Sales'
                cardColor='green'
            />
        )
    }
}
function mapStateToProps({ incomes }){
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return { 
        weekPayments: getWeekPayments(incomes)
    }
}
export default withRouter(connect(mapStateToProps,{ fetchCompanyIncomes })(WeekPaymentsChart))