import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, Input } from '../../common'

const RentalForm = ({ title, category, color, onInputChange, values, onSubmit }) => {
    return (
            <Card>
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
                            value={values.cod}
                        />
                        <Input
                            label='Cost'
                            type='number'
                            onChange={onInputChange.bind(this,'cost')}
                            value={values.cost}
                        />
                        <Input
                            label='minimun for rent'
                            type='number'
                            onChange={onInputChange.bind(this,'min')}
                            value={values.min}
                        />
                        <Input
                            label='Maximun for rent'
                            type='number'
                            onChange={onInputChange.bind(this,'max')}
                            value={values.max}
                        />
                        <Input
                            label='Address'
                            type='text'
                            onChange={onInputChange.bind(this,'address')}
                            value={values.address}
                        />
                        <Input
                            label='Description'
                            type='text'
                            onChange={onInputChange.bind(this,'description')}
                            value={values.description}
                        />
                        <button type='submit' className='btn btn primary'> submit </button>
                    </form>
                </CardBody>
            </Card>
    )
}

export default RentalForm