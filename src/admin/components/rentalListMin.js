import React from 'react'
import { Card, CardBody, CardHeader, Table, TableBody } from '../../common'

const RentalListMin = ({ render, renderTableHeader, onClickChangeScreen }) => { 
    return( 
        <Card>
            <CardHeader title='Rentals' category='All the rentals'/>                               
            <CardBody>
                <Table>
                    {renderTableHeader()}
                    <TableBody>
                        { render() }
                    </TableBody>
                </Table>
                <button className='btn btn-primary' onClick={() => onClickChangeScreen('employees')}>Next</button>
            </CardBody>
        </Card>
    )
}


export default RentalListMin
