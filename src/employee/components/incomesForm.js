import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, CardHeader, CardBody, Input } from '../../common'
import PropTypes from 'prop-types'
import { addCompanyIncome } from '../actions/operations'
import { connect } from 'react-redux'
class IncomesForm extends Component {  
    state = { 
        mount: 0,
        observation: '',
        quantity: 0
    }
    onQuantityChange = (quantity) => {
        const { selectedRental, employeeRents } = this.props
        quantity >= 0 && 
        this.setState({
           mount: quantity * employeeRents[selectedRental].price,
           quantity,
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        const { companyId } = this.props.match.params
        const { employeeRents, selectedRental, onScreenChange } = this.props
        addCompanyIncome(companyId, {
            ...this.state, 
            rentalId: employeeRents[selectedRental].rentalId,
            tenant: employeeRents[selectedRental].tenant
        })
        this.resetState()
        onScreenChange('Saved', '')
    }
    resetState = () => this.setState({ mount: 0, observation: '', quantity: 0})
    render(){
        const { mount, observation, quantity  } = this.state
        const { employeeRents, selectedRental } = this.props
        const { tenant, price, paymentDate, rentalId } = employeeRents[selectedRental]
        return (
                <Card size='9'>
                    <CardHeader 
                        title='Payment'
                        category=''
                        color=''
                    />
                    <CardBody>
                        <form onSubmit={this.onSubmit}>
                            <Input
                                type='text'
                                value={tenant}
                                disabled
                            />
                            <Input
                                type='date'
                                value={paymentDate}
                                disabled
                            />
                            <Input
                                label='Monthly Bills'
                                type='number'
                                value={price}
                                disabled
                            />
                            <Input
                                label='Mount to pay'
                                type='number'
                                value={mount}
                                disabled
                            />
                            <Input
                                label='Months to pay'
                                type='number'
                                onChange={this.onQuantityChange}
                                value={quantity}
                            />
                            <button type='submit' className='btn btn primary'> submit </button>
                        </form>
                    </CardBody>
                </Card>
        )
    }
}
IncomesForm.propTypes = {
    selectedRental: PropTypes.string.isRequired, 
    onScreenChange: PropTypes.func
}

const mapStateToProps = ({ employeeRents }) => {
    return {
        employeeRents
    }
}
export default withRouter(connect(mapStateToProps)(IncomesForm))