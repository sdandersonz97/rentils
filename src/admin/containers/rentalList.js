import React, { Component } from 'React'
import { connect } from 'react-redux'
import { Card, CardBody, CardHeader, Table, TableBody, TableHeader } from '../../common'
import { withRouter } from 'react-router-dom'
import { fetchCompanyRentals } from '../actions/rentals'

class RentalList extends Component {
    renderRows = () => {}
    render(){
        return( 
            <Card>
            <CardHeader title="Rentals" category="All the rentals "/>                               
            <CardBody>
                <Table>
                    <TableHeader titles={['COD','ADDRESS','AVAIBLE','COST','DESCRIPTION']}/>
                    <TableBody>
                    <tr key={rentalsData.id}>
                        <td>
                           Hola 
                        </td>
                        <td>
                            Hola 
                        </td>
                        <td>
                            Hola
                        </td>
                        <td>
                            Hola
                        </td>
                    </tr>
                    </TableBody>
                </Table>
            </CardBody>
        </Card>
        )
    }
}

const mapStateToProps = ({ rentals }) => {
    return {
        rentalList: rentals.rentalList
    }
}
export default withRouter(connect(mapStateToProps, { fetchCompanyRentals })(RentalList))
