import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardHeader, Table, TableBody, TableHeader, DropdownButton } from '../../common'
import { withRouter, Link } from 'react-router-dom'
import { fetchCompanyRentals } from '../actions/rentals'

class RentalList extends Component { 
    state={
        filter: 'all'
    }
    componentDidMount(){
        const { companyId } = this.props.match.params
        const { fetchCompanyRentals, rentalList } = this.props
        Object.keys(rentalList).length === 0 && fetchCompanyRentals(companyId)
    }
    onClickChangeFilter = filter => {
        this.setState({
            filter
        })
    }
    renderOptions = () => [
        { name:'Rented', onClick: () => this.onClickChangeFilter('rented') },
        { name:'Available', onClick: () => this.onClickChangeFilter('available') },
        { name:'All', onClick: () => this.onClickChangeFilter('all') }
    ]
    renderRows = rentalId => {
        const { rentalList } = this.props
        const { companyId } = this.props.match.params
        return(
            <tr key={rentalId}>
                <td>
                    <Link to={`/company/${companyId}/admin/rentals/rental/${rentalId}`}>{rentalList[rentalId].cod}</Link>
                </td>
                <td>
                    {rentalList[rentalId].address}
                </td>
                <td>
                    {rentalList[rentalId].available ? 'AVAILABLE' : 'RENTED'}
                </td>
                <td>
                    {rentalList[rentalId].cost}
                </td>
                <td>
                    {rentalList[rentalId].description}
                </td>
                <td>
                    {rentalList[rentalId].min} - {rentalList[rentalId].max}
                </td>
            </tr>
        )
    }
    filterRentalList = () => {
        const { rentalList } = this.props
        const { filter } = this.state
        return filter === 'all' 
        ? Object.keys(rentalList)
        : filter === 'available' 
            ? Object.keys(rentalList).filter(rental => rentalList[rental].available )
            : Object.keys(rentalList).filter(rental => !rentalList[rental].available )
    }
    render(){
        const { rentalList } = this.props
        return( 
            <Card>
            <CardHeader title='Rentals' category='All the rentals'/>                               
            <CardBody>
                <DropdownButton 
                    title='filter'
                    options={this.renderOptions()}
                />
                <Table>
                    <TableHeader titles={['COD','ADDRESS','DISPONIBILITY','COST','DESCRIPTION','RANGE']}/>
                    <TableBody>
                        {this.filterRentalList().map(this.renderRows)}
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
