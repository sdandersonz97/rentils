import React from 'react'
import AccountingStatus from '../containers/accountingStatus'
const Dashboard = () => {
    return(
        <div className='content'>
            <div className='container-fluid'>
                <div className='row'>
                   <AccountingStatus/>
                </div>
                <div className='row'>
                    <div className='col-md-6'>

                    </div>  
                    <div className='col-md-6'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard