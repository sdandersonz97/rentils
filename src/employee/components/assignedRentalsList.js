import React from 'react'
import { Card, CardBody, CardHeader, Table, TableBody, TableHeader } from '../../common'

const AssignedRentalListMin = ({ render, renderTableHeader }) => { 
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
        </CardBody>
        </Card>
    )
}


export default AssignedRentalListMin
