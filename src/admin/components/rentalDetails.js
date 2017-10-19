import React from 'react'
import RentalInfo from '../containers/rentalInfo'
import RentalRentInfo from '../containers/rentalRentInfo'
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

                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
                <div className="row">

                </div>
                
            </div>
        </div>
    )
}

export default RentalDetails