import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, Input } from '../../common'
import PropTypes from 'prop-types'
const IncomesForm = ({ values, rentValues, onSubmit, onQuantityChange }) => {
    const { mount, observation, quantity  } = values
    const { tenant, price, paymentDate } = rentValues
    return (
            <Card size='9'>
                <CardHeader 
                    title='Payment'
                    category=''
                    color=''
                />
                <CardBody>
                    <form onSubmit={onSubmit}>
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
                            onChange={onQuantityChange.bind(this,price)}
                            value={quantity}
                        />
                        <button type='submit' className='btn btn primary'> submit </button>
                    </form>
                </CardBody>
            </Card>
    )
}
IncomesForm.propTypes = {
    onInputChange: PropTypes.func, 
    values: PropTypes.object, 
    onSubmit: PropTypes.func
}
export default IncomesForm