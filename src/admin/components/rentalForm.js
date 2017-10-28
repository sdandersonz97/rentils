import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Card, CardHeader, CardBody, Input } from '../../common'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCompanyRental } from '../actions/rentals'

class RentalForm extends Component {
    state = {
        cod:'',
        cost:'',
        address:'',
        max:'',
        min:'',
        description:'',
        isRented:false
    }
    onInputChange = (input, value) => {
        this.setState({
            [input]: value
        })
    }
    onCheckboxChange = () => {
        this.setState({ isRented: !this.state.isRented })
    }
    onsubmit = e => {
        const { cod, cost, min, max, address, description } = this.state
        const { companyId } = this.props.match.params
        e.preventDefault()
        const rentalId = addCompanyRental(companyId, {
            cod, 
            cost, 
            min, 
            max, 
            address, 
            description
        })
    }
    render(){
        const { cod, cost, min, max, address, description, isRented } = this.state
        const { companyId } = this.props.match.params
        return (
                <Card size='9'>
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
                                    label='minimun for rent'
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
                            <div>
                                <input type='checkbox' onChange={this.onCheckboxChange} checked={isRented} id='isRented'/> 
                                <label htmlFor='isRented'>Is rented?</label>
                            </div>
                            {!isRented 
                                ?<button type='submit' className='btn btn primary'> submit </button>
                                :<button className='btn btn primary' onClick={() => this.props.onScreenChange('RentForm')}> next </button>
                            }
                            <Link className='btn btn danger' to={`company/${companyId}/admin/dashboard`}> cancel </Link>
                        </form>
                    </CardBody>
                </Card>
        )
    }
}
RentalForm.propTypes = {
    onScreenChange: PropTypes.func
}
export default withRouter(connect(null, { addCompanyRental })(RentalForm))