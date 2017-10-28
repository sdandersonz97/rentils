import React from 'react'
import { Card, CardHeader, CardBody, Input } from '../../common'
import PropTypes from 'prop-types'

const RentForm = ({ title, category, color, onInputChange, values, onSubmit, cancelLink, range, onScreenChange }) => {
    const { price, tenant, paymentDate } = values
    const isValid = !price >= range[0] && !price<=range[1] && !tenant && !paymentDate 
    return (
        <Card size='9'>
            <CardHeader 
                title={title}
                category={category}
                color={color}
            />
            <CardBody>
                <form>
                    <Input
                        label='tenant'
                        type='text'
                        onChange={onInputChange.bind(this,'tenant')}
                        value={tenant}
                        required
                    />
                    <Input
                        label='Price'
                        type='number'
                        min={range[0]}
                        max={range[1]}
                        onChange={onInputChange.bind(this,'price')}
                        value={price}
                        required
                    />
                    <Input
                        label='Payment Day'
                        type='date'            
                        onChange={onInputChange.bind(this,'paymentDate')}
                        value={paymentDate}
                        required
                    />
                    <button onClick={()=>onScreenChange('EmployeeList')} 
                    className='btn btn primary' 
                    disabled={isValid}> 
                        Next 
                    </button>
                    <button onClick={()=>onScreenChange('RentalForm')} className='btn btn primary'> Back </button>
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