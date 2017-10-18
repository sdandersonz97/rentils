import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, Input } from '../../common'
import PropTypes from 'prop-types'
const RentalForm = ({ title, category, color, onInputChange, values, onSubmit, cancelLink, isRented, onCheckboxChange, onScreenChange }) => {
    const { cod, cost, min, max, address, description } = values
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
                            label='Cod'
                            type='text'
                            onChange={onInputChange.bind(this,'cod')}
                            value={cod}
                        />
                        <Input
                            label='Cost'
                            type='number'
                            onChange={onInputChange.bind(this,'cost')}
                            value={cost}
                        />
                        <Input
                            label='minimun for rent'
                            type='number'
                            onChange={onInputChange.bind(this,'min')}
                            value={min}
                        />
                        <Input
                            label='Maximun for rent'
                            type='number'
                            onChange={onInputChange.bind(this,'max')}
                            value={max}
                        />
                        <Input
                            label='Address'
                            type='text'
                            onChange={onInputChange.bind(this,'address')}
                            value={address}
                        />
                        <Input
                            label='Description'
                            type='text'
                            onChange={onInputChange.bind(this,'description')}
                            value={description}
                        />
                        <div>
                            <input type='checkbox' onClick={()=>onCheckboxChange()} checked={isRented} id='isRented'/> 
                            <label htmlFor='isRented'>Is rented?</label>
                        </div>
                        {!isRented 
                            ?<button type='submit' className='btn btn primary'> submit </button>
                            :<button className='btn btn primary' onClick={() => onScreenChange('RentForm')}> next </button>
                        }
                        <Link className='btn btn danger' to={cancelLink}> cancel </Link>
                    </form>
                </CardBody>
            </Card>
    )
}
RentalForm.propTypes = {
    title: PropTypes.string, 
    category: PropTypes.string, 
    color: PropTypes.string, 
    onInputChange: PropTypes.func.isRequired, 
    values: PropTypes.object, 
    onSubmit: PropTypes.func
}
export default RentalForm