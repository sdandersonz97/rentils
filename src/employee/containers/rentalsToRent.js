import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchAssignments } from '../actions/rentals'
import { addCompanyRent } from '../../actions'
import AssignedRentalListMin from '../components/assignedRentalsList'
import { Rent } from '../../utils/constructors'
import { TableHeader } from '../../common'
import RentForm from '../components/rentForm'
class AssignedRentals extends Component {
    state={
        selectedRental: '',
        newRent: new Rent(0,'','','',localStorage.getItem('token')),
        screen: 'Rentals'
    }
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchAssignments(companyId, localStorage.getItem('token'))
    }
    onRentInputChange = (input, value) => this.setState({ 
        ...this.state,
        newRent: { ...this.state.newRent, [input]:value }
    })
    onSelectRental = (e) => this.setState({ selectedRental: e.target.value }) 
    renderRentalsRows = rentalId => {
        const { employeeRentals } = this.props
        const { selectedRental } = this.state
        return(
            <tr key={employeeRentals}>
                <td>
                    <input type='radio' value={rentalId} onClick={this.onSelectRental} checked={selectedRental===rentalId}/>
                </td>
                <td>
                    {employeeRentals[rentalId].cod}
                </td>
                <td>
                    {employeeRentals[rentalId].address}
                </td>
                <td>
                    ${employeeRentals[rentalId].min} - ${employeeRentals[rentalId].max}
                </td>
            </tr>
        )
    }
    onSubmit = (e) => {
        const { companyId } = this.props.match.params
        const { newRent, selectedRental } = this.state
        e.preventDefault()
        addCompanyRent(companyId, {...newRent, rentalId:selectedRental })
        this.resetState()
    }
    resetState = () => {
        this.setState({
            selectedRental: '',
            newRent: new Rent(0,'','','',localStorage.getItem('token')),
            screen: 'Saved'
        })
    }
    onScreenChange = screen => this.setState({ screen }) 
    renderTableHeader = () => <TableHeader titles={['SELECT','COD','ADDRESS', 'Range']}/>
    filterRentalAvailables = () => {
        const { employeeRentals } = this.props
        return Object.keys(employeeRentals).filter(rental => employeeRentals[rental].available )
    }
    setRangeForRent = () => {
        const { employeeRentals } = this.props
        const { selectedRental } = this.state
        const range = [employeeRentals[selectedRental].min, employeeRentals[selectedRental].max]
        return range
    }
    onNext = () => this.state.selectedRental ? this.onScreenChange('RentForm') : alert('ups!. you need to select a rental')
    render(){ 
        const { screen, newRent, selectedRental } = this.state
        return(
            <div>

                {screen === 'Rentals' 
                    ?<AssignedRentalListMin
                        renderTableHeader={this.renderTableHeader}
                        render={() => this.filterRentalAvailables().map(this.renderRentalsRows)}
                    />
                    : screen === 'RentForm' 
                        ? <RentForm
                            values={newRent}
                            onInputChange={this.onRentInputChange}            
                            onScreenChange={this.onScreenChange}
                            onSubmit={this.onSubmit}
                            onSetRange={this.setRangeForRent}
                        />
                    :<div>SAVED</div>}
                <button className='btn btn-primary' onClick={this.onNext}>Next</button>
            </div>
        )
    }
}

const mapStateToProps = ({employeeRentals}) => {
    return { employeeRentals }
}
export default withRouter(connect(mapStateToProps, { fetchAssignments })(AssignedRentals))