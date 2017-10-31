import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCompanyIncomes } from '../actions/accounting'
import { LineChart } from '../../common'
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
        weekPayments: Object.keys(incomes)
            .filter(payment => incomes[payment].timestamp >= ( Date.now() - 1000*60*60*24 * 7 ))
            .reduce((a,c)=>{
                days.map((day,index) => {              
                    if(moment(incomes[c].timestamp).format('ddd') === day){
                        !a[index]
                        ? a[index] = 0 + incomes[c].mount
                        : a[index] = a[index]+incomes[c].mount
                        return a
                    }  
                })  
                return a
        },[])
    }
}
export default withRouter(connect(mapStateToProps,{ fetchCompanyIncomes })(WeekPaymentsChart))