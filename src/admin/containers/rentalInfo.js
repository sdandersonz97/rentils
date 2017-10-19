import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CardStats, CardStatsBody, CardStatsHeader } from '../../common'
import { fetchCompanyRental } from '../actions/rentals'
class RentalInfo extends Component {
    componentDidMount(){
        const { companyId, rentalId } = this.props.match.params 
        this.props.fetchCompanyRental(companyId, rentalId)
    }
    render(){
        const { rental } = this.props 
        return(
            <CardStats>
                <CardStatsHeader icon='bookmark' iconColor='white' color='purple'/>
                <CardStatsBody category='RENTAL INFO' extend>
                    <p style={{marginTop:60, textAlign:'left'}}><strong>Cod:</strong> {rental.cod} <br/>
                    <strong>Address:</strong> {rental.address} <br/>
                    <strong>Description:</strong> {rental.description} <br/>
                    <strong>Range:</strong> {rental.min} - {rental.max} <br/>
                    <strong>Disponibility:</strong> {rental.available ? 'AVAILABLE' : 'RENTED'}</p>
                </CardStatsBody>
            </CardStats>
        )
    }
}
const mapStateToProps = ({ rentals }) => {
    return {
        rental: rentals.selectedRental
    }
}
export default withRouter(connect(mapStateToProps, { fetchCompanyRental })(RentalInfo))