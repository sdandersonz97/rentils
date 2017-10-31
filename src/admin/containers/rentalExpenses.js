import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardStats, CardStatsBody, CardStatsFooter, CardStatsHeader } from '../../common'
import { withRouter } from 'react-router-dom'
class RentalExpenses extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
    }
    render(){
        const { companyId } = this.props.match.params
        return(
            <CardStats>
                <CardStatsHeader icon='money_off' color='red' />
                <CardStatsBody title={`$${this.props.expenses}`} category='EXPENSES' />
            </CardStats>
        )
    }
}

const mapStateToProps = ({ rentals }) => {
    const { selectedRental } = rentals
    return {
        expenses: selectedRental.expenses,
    }
}
export default withRouter(connect(mapStateToProps)(RentalExpenses))