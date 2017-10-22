import React from 'react'
import { Card, CardHeader, CardBody, Input } from '../../common'
import PropTypes from 'prop-types'
const ExpensesForm = ({ onInputChange, values, onSubmit }) => {
    const { mount, description } = values
    return (
            <Card size='9'>
                <CardHeader 
                    title='expenses'
                    category=''
                    color=''
                />
                <CardBody>
                    <form onSubmit={onSubmit}>
                        <Input
                            label='Mount'
                            type='number'
                            onChange={onInputChange.bind(this,'mount')}
                            value={mount}
                        />
                        <label>Description</label>
                        <textarea 
                            className='form-control'
                            value={description}
                            onChange={e => onInputChange('description',e.target.value)} 
                        /> 
                        <button type='submit' className='btn btn primary'> submit </button>
                    </form>
                </CardBody>
            </Card>
    )
}
ExpensesForm.propTypes = {
    onInputChange: PropTypes.func.isRequired, 
    values: PropTypes.object, 
    onSubmit: PropTypes.func
}
export default ExpensesForm