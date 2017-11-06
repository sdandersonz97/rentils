import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Card, CardHeader, CardBody, Input } from '../../common'
import { connect } from 'react-redux'
import { addCompanyRental } from '../actions/rentals'

class RentalForm extends Component {
    state = {
        cod:'',
        cost:'',
        address:'',
        max:'',
        min:'',
        description:''
    }
    onInputChange = (input, value) => {
        this.setState({
            [input]: value
        })
    }
    resetState = () => 
        this.setState({
            cod:'',
            cost:'',
            address:'',
            max:'',
            min:'',
            description:''
        })
    onSubmit = e => {
        const { cod, cost, min, max, address, description } = this.state
        const { companyId } = this.props.match.params
        const { addCompanyRental, history } = this.props
        e.preventDefault()
        const rentalId = addCompanyRental(companyId, {
            cod, 
            cost, 
            min, 
            max, 
            address, 
            description
        })
        this.resetState()
        history.push(`/company/${companyId}/admin/rentals/rental/${rentalId}`)
    }
    render(){
        const { cod, cost, min, max, address, description} = this.state
        const { companyId } = this.props.match.params
        return (
                <Card size='7'>
                    <CardHeader 
                        title='Rental'
                        category=''
                        color=''
                    />
                    <CardBody>
                        <form onSubmit={this.onSubmit}>
                            <Input
                                label='Cod'
                                type='text'
                                onChange={this.onInputChange.bind(this,'cod')}
                                value={cod}
                                required
                            />
                            <Input
                                label='Cost'
                                type='number'
                                onChange={this.onInputChange.bind(this,'cost')}
                                value={cost}
                                min={1}
                                required
                            />
                            <div className='row'>
                                <div className='col-md-6'>
                                <Input
                                    label='Minimun for rent'
                                    type='number'
                                    onChange={this.onInputChange.bind(this,'min')}
                                    value={min}
                                    min={1}
                                    required
                                />
                                </div>
                                <div className='col-md-6'>
                                <Input
                                    label='Maximun for rent'
                                    type='number'
                                    onChange={this.onInputChange.bind(this,'max')}
                                    value={max}
                                    min={1}
                                    required
                                />
                                </div>
                            </div>
                            <Input
                                label='Address'
                                type='text'
                                onChange={this.onInputChange.bind(this,'address')}
                                value={address}
                                required
                            />
                            <Input
                                label='Description'
                                type='text'
                                onChange={this.onInputChange.bind(this,'description')}
                                value={description}
                                required
                            />
                            <button type='submit' className='btn btn primary'> Save </button>
                            <Link className='btn btn danger' to={`company/${companyId}/admin/dashboard`}> cancel </Link>
                        </form>
                    </CardBody>
                </Card>
        )
    }
}
export default withRouter(connect(null, { addCompanyRental })(RentalForm))