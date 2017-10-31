import React from 'react'
import AccountingStatus from '../containers/accountingStatus'
import RentalsStatus from '../containers/rentalsStatus'
import WeekPaymentsChart from '../containers/weekPaymentsChart'
const Dashboard = () => {
    return(
        <div className='content'>
            <div className='container-fluid'>
                <div className='row'>
                   <AccountingStatus/>
                   <RentalsStatus/>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <WeekPaymentsChart/>
                    </div>  
                    <div className='col-md-6'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard