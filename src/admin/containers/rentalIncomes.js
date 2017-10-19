import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardStats, CardStatsBody, CardStatsFooter, CardStatsHeader } from '../../common'
import { withRouter } from 'react-router-dom'
class RentalIncomes extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
    }
    render(){
        const { companyId } = this.props.match.params
        return(
            <CardStats>
                <CardStatsHeader icon='attach_money' color='green' />
                <CardStatsBody title='$1000' category='INCOMES' />
            </CardStats>
        )
    }
}


export default withRouter(connect()(RentalIncomes))