import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CardStats, CardStatsBody, CardStatsHeader } from '../../common'
import { fetchRentInfo } from '../actions/rents'
import { dayLeft } from '../../utils/helpers'
class RentalRentInfo extends Component {
    componentDidMount(){
        const { companyId, rentalId } = this.props.match.params 
        this.props.fetchRentInfo(companyId, rentalId)
    }
    render(){
        const { rentInfo } = this.props 
        return(
            <CardStats style={{minHeight:240}}>
                <CardStatsHeader icon='assignment' iconColor='white' color={'blue'}/>
                <CardStatsBody category='RENT INFO' extend>
                    
                    {rentInfo 
                    ? <p style={{marginTop:60, textAlign:'left'}}>
                        <strong>Tenant:</strong> {rentInfo.tenant} <br/>
                        <strong>Payment Day:</strong> {rentInfo.paymentDate} <br/>
                        <strong>Next Charge:</strong> {dayLeft(rentInfo.paymentDate)}<br/>
                        <strong>Price:</strong> {rentInfo.price}
                      </p>
                    : <h3 style={{marginTop:60, textAlign:'center'}}>AVAILABLE FOR RENT</h3>
                    }
                  
                </CardStatsBody>
            </CardStats>
        )
    }
}
const mapStateToProps = ({ rentals,  }) => {
    const { rentInfo } = rentals.selectedRental
    return Object.keys(rentInfo).length > 0 
        ? { rentInfo }
        : {}    
    }
export default withRouter(connect(mapStateToProps, { fetchRentInfo })(RentalRentInfo))