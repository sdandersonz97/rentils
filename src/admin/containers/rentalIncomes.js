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
                <CardStatsBody title={`$${this.props.incomes}`} category='INCOMES' />
            </CardStats>
        )
    }
}
const mapStateToProps = ({ rentals }) => {
    const { selectedRental } = rentals
    return {
        incomes: selectedRental.incomes,
    }
}

export default withRouter(connect(mapStateToProps)(RentalIncomes))