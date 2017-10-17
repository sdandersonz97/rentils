import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardStats, CardStatsBody, CardStatsFooter, CardStatsHeader } from '../../common'
import { withRouter } from 'react-router-dom'
class AccountingStatus extends Component {
    render(){
        const { companyId } = this.props.match.params
        return(
            <div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <CardStats>
                        <CardStatsHeader icon='attach_money' color='blue' />
                        <CardStatsBody title='1000' category='Incomes' />
                        <CardStatsFooter link urlFooter={`/company/${companyId}/admin/incomes`}> See Details </CardStatsFooter>
                    </CardStats>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <CardStats>
                        <CardStatsHeader icon='money_off' color='red' />
                        <CardStatsBody title='1000' category='Expenses' />
                        <CardStatsFooter link urlFooter={`/company/${companyId}/admin/expenses`}> See Details </CardStatsFooter>
                    </CardStats>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6'>
                    <CardStats>
                        <CardStatsHeader icon='monetization_on' color='green' />
                        <CardStatsBody title='0' category='Budge' />
                        <CardStatsFooter/>
                    </CardStats>
                </div>  
            </div>
        )
    }
}

export default withRouter(AccountingStatus)