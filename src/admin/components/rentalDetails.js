import React from 'react'
import RentalInfo from '../containers/rentalInfo'
import RentalRentInfo from '../containers/rentalRentInfo'
import RentalIncomes from '../containers/rentalIncomes'
import RentalExpenses from '../containers/rentalExpenses'
const RentalDetails = () => {
    return(
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <RentalInfo/>
                    </div>
                    <div className="col-md-6">
                        <RentalRentInfo/>
                    </div>
                    <div className="col-md-6">
                        <RentalIncomes/>
                    </div>
                    <div className="col-md-6">
                        <RentalExpenses/>
                    </div>
                </div>
                <div className="row">

                </div>
                
            </div>
        </div>
    )
}

export default RentalDetails