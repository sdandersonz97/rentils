import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CardStats, CardStatsBody, CardStatsHeader } from '../../common'
import { fetchRentInfo } from '../actions/rents'
import { fetchCompanyEmployee } from '../actions/employees'
import { dayLeft } from '../../utils/helpers'
class RentalRentInfo extends Component {
    componentDidMount(){
        const { companyId, rentalId } = this.props.match.params 
        this.props.fetchRentInfo(companyId, rentalId)
    }
    
    render(){
        const { rentInfo, selectedEmployee } = this.props 
        
        return(
            <CardStats style={{minHeight:220}}>
                <CardStatsHeader icon='assignment' iconColor='white' color={'blue'}/>
                <CardStatsBody category='RENT INFO' extend>
                    
                    {rentInfo 
                    ? <p style={{marginTop:60, textAlign:'left'}}>
                        <strong>Tenant:</strong> {rentInfo.tenant} <br/>
                        <strong>Payment Day:</strong> {rentInfo.paymentDate} <br/>
                        <strong>Next Charge:</strong> {dayLeft(rentInfo.paymentDate)}<br/>
                        <strong>Employee: </strong> {selectedEmployee.fullname} <br/>
                        <strong>Price:</strong> {rentInfo.price}
                      </p>
                    : <h3 style={{marginTop:60, textAlign:'center'}}>AVAILABLE FOR RENT</h3>
                    }
                  
                </CardStatsBody>
            </CardStats>
        )
    }
}
const mapStateToProps = ({ rentals, employees }) => {
    const { rentInfo } = rentals.selectedRental
    const { selectedEmployee } = employees
    return Object.keys(rentInfo).length > 0 
        ? { rentInfo, selectedEmployee }
        : {}    
    }
export default withRouter(connect(mapStateToProps, { fetchRentInfo, fetchCompanyEmployee })(RentalRentInfo))