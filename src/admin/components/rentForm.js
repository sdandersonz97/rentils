import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Input } from '../../common'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addCompanyRent } from '../../actions'
class RentForm extends Component {
    state = {
        price: '',
        tenant: '',
        paymentDate: '',
    }
    onInputChange = (input, value) => {
        this.setState({
            [input]: value
        })
    }
    onSubmit = (e) => {
        const { companyId } = this.props.match.params
        const { price, tenant, paymentDate } = this.state
        e.preventDefault()
        this.props.addCompanyRent(companyId, { price, tenant, paymentDate })
    }
    render(){
        const { price, tenant, paymentDate } = this.state
        return (
            <Card size='9'>
                <CardHeader 
                    title='Rent'
                    category=''
                    color=''
                />
                <CardBody>
                    <form>
                        <Input
                            label='tenant'
                            type='text'
                            onChange={this.onInputChange.bind(this,'tenant')}
                            value={tenant}
                            required
                        />
                        <Input
                            label='Price'
                            type='number'
                            onChange={this.onInputChange.bind(this,'price')}
                            value={price}
                            required
                        />
                        <Input
                            label='Payment Day'
                            type='date'            
                            onChange={this.onInputChange.bind(this,'paymentDate')}
                            value={paymentDate}
                            required
                        />
                        <button onClick={()=>this.props.onScreenChange('EmployeeList')} 
                        className='btn btn primary' 
                        > 
                            Save and assign an employee 
                        </button>
                    </form>
                </CardBody>
            </Card>
        )
    }
}

RentForm.propTypes = {
   onScreenChange: PropTypes.func
}
export default withRouter(connect(null, { addCompanyRent })(RentForm))