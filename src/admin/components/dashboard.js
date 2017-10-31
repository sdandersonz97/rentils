import React from 'react'
import AccountingStatus from '../containers/accountingStatus'
import RentalsStatus from '../containers/rentalsStatus'
import PaymentsChart from './paymentsChart'
import EmployeesStatus from '../containers/employeesStatus'
const Dashboard = () => {
    return(
        <div className='content'>
            <div className='container-fluid'>
                <div className='row'>
                   <AccountingStatus/>
                   <RentalsStatus/>
                   <EmployeesStatus/>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <PaymentsChart/>
                    </div>  
                    <div className='col-md-6'>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard