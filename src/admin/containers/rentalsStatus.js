import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchCompanyRentals } from '../actions/rentals'
import { CardStats, CardStatsBody, CardStatsFooter, CardStatsHeader } from '../../common'
class RentalsStatus extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params 
        const { rentalList, fetchCompanyRentals } = this.props
        Object.keys(rentalList).length === 0 && fetchCompanyRentals(companyId)
    }
    render(){
        const { companyId } = this.props.match.params 
        const { rentalsTotal, rentalsAvailable } = this.props
        return[ 
            <div key="rentals" className='col-lg-6 col-md-6 col-sm-6'>
                <CardStats>
                    <CardStatsHeader icon='home' color='purple' />
                    <CardStatsBody title={rentalsTotal} category='Rentals' />
                    <CardStatsFooter link urlFooter={`/company/${companyId}/admin/rentals`}> See Details </CardStatsFooter>
                </CardStats>
            </div>,
            <div key="homes" className='col-lg-6 col-md-6 col-sm-6'>
                <CardStats>
                    <CardStatsHeader icon='home' color='orange' />
                    <CardStatsBody title={rentalsAvailable} category='Rentals availables' />
                    <CardStatsFooter link urlFooter={`/company/${companyId}/admin/rentals`}> See Details </CardStatsFooter>
                </CardStats>
            </div>
            ]
        
    }
}

const mapStateToProps = ({ rentals }) => {
    const { rentalsAvailable, rentalsTotal, rentalList } = rentals
    return {
        rentalList,
        rentalsTotal,
        rentalsAvailable 
    }
}

export default withRouter(connect(mapStateToProps,{ fetchCompanyRentals })(RentalsStatus))