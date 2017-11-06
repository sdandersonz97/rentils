import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardStats, CardStatsBody, CardStatsFooter, CardStatsHeader } from '../../common'
import { withRouter } from 'react-router-dom'
import { fetchCompanyAccounting } from '../actions/accounting'
class AccountingStatus extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchCompanyAccounting(companyId)
    }
    render(){
        const { companyId } = this.props.match.params
        const { incomes, expenses } = this.props
        return(
            <div>
                <div className='col-lg-4 col-md-4 col-sm-4'>
                    <CardStats>
                        <CardStatsHeader icon='attach_money' color='blue' />
                        <CardStatsBody title={incomes} category='Incomes' />
                        <CardStatsFooter link urlFooter={`/company/${companyId}/admin/incomes`}> See Details </CardStatsFooter>
                    </CardStats>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4'>
                    <CardStats>
                        <CardStatsHeader icon='money_off' color='red' />
                        <CardStatsBody title={expenses} category='Expenses' />
                        <CardStatsFooter link urlFooter={`/company/${companyId}/admin/expenses`}> See Details </CardStatsFooter>
                    </CardStats>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4'>
                    <CardStats>
                        <CardStatsHeader icon='monetization_on' color='green' />
                        <CardStatsBody title={incomes-expenses} category='Budget' />
                        <CardStatsFooter/>
                    </CardStats>
                </div>  
            </div>
        )
    }
}

const mapStateToProps = ({ accouting }) => {
    return {
        incomes: accouting.incomes,
        expenses: accouting.expenses
    }
}
export default withRouter(connect(mapStateToProps, { fetchCompanyAccounting })(AccountingStatus))