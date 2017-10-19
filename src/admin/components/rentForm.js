import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, Input } from '../../common'
import PropTypes from 'prop-types'

const RentForm = ({ title, category, color, onInputChange, values, onSubmit, cancelLink, range }) => {
    const { price, tenant, paymentDate } = values
    return (
        <Card size='9'>
            <CardHeader 
                title={title}
                category={category}
                color={color}
            />
            <CardBody>
                <form onSubmit={onSubmit}>
                    <Input
                        label='tenant'
                        type='text'
                        onChange={onInputChange.bind(this,'tenant')}
                        value={tenant}
                    />
                    <Input
                        label='Price'
                        type='number'
                        min={range[0]}
                        max={range[1]}
                        onChange={onInputChange.bind(this,'price')}
                        value={price}
                    />
                    <Input
                        label='Payment Day'
                        type='date'
                        
                        onChange={onInputChange.bind(this,'paymentDate')}
                        value={paymentDate}
                    />
                    <button type='submit' className='btn btn primary'> submit </button>
                    <Link className='btn btn danger' to={cancelLink}> cancel </Link>
                </form>
            </CardBody>
        </Card>
    )
}

RentForm.propTypes = {
    title: PropTypes.string, 
    category: PropTypes.string, 
    color: PropTypes.string, 
    onInputChange: PropTypes.func.isRequired, 
    values: PropTypes.object, 
    onSubmit: PropTypes.func
}
export default RentForm