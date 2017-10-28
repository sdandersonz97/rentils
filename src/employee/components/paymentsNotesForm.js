import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, CardHeader, CardBody, Input } from '../../common'
class PaymentNoteForm extends Component {
    state = {
        mount:'',
        days:7,
        description:'',
    }
    onSubmit = e => {
        e.preventDefault()

    }
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
                                value={tenant}
                                disabled
                            />
                            <Input 
                                value={price}
                                disabled
                            />
                            <Input 
                                label='Monthly Bills'
                                type='number'
                                value={mount}
                                onChange={mount => this.setState({ mount })}
                            />
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