import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, CardHeader, CardBody, Input } from '../../common'
import { addPaymentNote } from '../actions/operations'
class PaymentNoteForm extends Component {
    state = {
        mount:'',
        days:7,
        description:'',
    }
    onSubmit = e => {
        const { companyId } = this.props.match.params
        const { employeeRents, selectedRental, onScreenChange } = this.props
        const rest = employeeRents[selectedRental].price - this.state.mount 
        const paymentDate = Date.now() + 1000*60*60*24*this.state.days
        e.preventDefault()
        addPaymentNote(companyId, { 
            ...this.state, 
            tenant: employeeRents[selectedRental].tenant,
            rest,
            rentalId: selectedRental, 
            uid: localStorage.getItem('token'),
            paymentDate 
        })
        this.resetState()
        onScreenChange('RentalList')
    }
    resetState = () => this.setState({ mount: '', days:7, description:'' })
    render(){
        const { mount, days, description } = this.state
        const { employeeRents, selectedRental } = this.props 
        const { tenant, price } = employeeRents[selectedRental]
        return (
                <Card size='9'>
                    <CardHeader 
                        title='Payment Note'
                        category=''
                        color=''
                    />
                    <CardBody>
                        <form onSubmit={this.onSubmit}>
                            <Input 
                                label='Tenant'
                                value={tenant}
                                disabled
                            />
                            <Input 
                                label='Monthly bills'
                                value={price}
                                disabled
                            />
                            <Input 
                                label='Rest'
                                value={price - mount}
                                disabled
                            />
                            <Input 
                                label='Mount'
                                type='number'
                                value={mount}
                                onChange={mount => this.setState({ mount })}
                            />
                            <label>Next Charge </label>
                            <select className='form-control' onChange={({target}) => this.setState({ days: target.value })}>
                                <option value={7}>7 days</option>
                                <option value={15}>15 days</option>
                                <option value={20}>20 days</option>
                            </select>
                            <textarea 
                                className='form-control'
                                value={description}
                                onChange={({target}) => this.setState({ description: target.value })}
                                placeholder='description'
                            />
                            <button type='submit' className='btn btn primary'> submit </button>
                        </form>
                    </CardBody>
                </Card>
        )
    }
}
const mapStateToProps = ({ employeeRents }) => {
    return {
        employeeRents
    }
}
export default withRouter(connect(mapStateToProps)(PaymentNoteForm))