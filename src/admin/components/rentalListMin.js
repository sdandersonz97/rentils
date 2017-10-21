import React from 'react'
import { Card, CardBody, CardHeader, Table, TableBody, TableHeader } from '../../common'

const RentalListMin = ({ render, onClickChangeScreen }) => { 
    return( 
        <Card>
        <CardHeader title='Rentals' category='All the rentals'/>                               
        <CardBody>
            <Table>
                <TableHeader titles={['SELECT','COD','ADDRESS']}/>
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
