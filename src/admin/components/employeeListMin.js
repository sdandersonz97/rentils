import React from 'react'
import { Card, CardBody, CardHeader, Table, TableBody, TableHeader } from '../../common'

const EmployeeListMin = ({ render, onClickChangeScreen, onSubmitAssignment }) => { 
    return( 
        <Card>
        <CardHeader title='Employees' category='All the Employees'/>                               
        <CardBody>
            <Table>
                <TableHeader titles={['SELECT', 'COD', 'FULL NAME', 'RENTALS']}/>
                <TableBody>
                    { render() }
                </TableBody>
            </Table>
            <button className='btn btn-primary' onClick={onClickChangeScreen}>Back</button>
            <button className='btn btn-primary' onClick={onSubmitAssignment}>Assign</button>
        </CardBody>
        </Card>
    )
}


export default EmployeeListMin
