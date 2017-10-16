import React from 'react'
import { Card, CardBody } from '../../common'
import PropTypes from 'prop-types'

const AuthForm = ({ email, password, confirmPassword, onInputChange, onSubmit, signup }) => {
    return(
        <Card size={6}>
            <CardBody>
                    <form onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label>Email: </label>
                            <input
                                className='form-control'
                                onChange={({ target }) => onInputChange('email', target.value)}
                                type='text'
                                value={email}
                            />
                            <div className='invalid-feedback'>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Password: </label>
                            <input
                                className='form-control'
                                type='text'
                                value={password}
                                onChange={({ target }) => onInputChange('password', target.value)}
                            />
                            <div className='invalid-feedback'>
                            </div>
                        </div>
                        { signup && 
                            <div className='form-group'>
                                <label>Confirm Password: </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    value={confirmPassword}
                                    onChange={({ target }) => onInputChange('confirmPassword', target.value)}
                                />
                                <div className='invalid-feedback'>
                                </div>
                            </div>
                        }
                        <button type='submit' className='btn btn primary'> submit </button>
                    </form>
            </CardBody>
        </Card>
    )
}
AuthForm.propTypes = {
    email: PropTypes.string.isRequired, 
    password: PropTypes.string.isRequired, 
    onInputChange: PropTypes.func.isRequired, 
    onSubmit: PropTypes.func.isRequired,
    confirmPassword: PropTypes.string, 
    signup: PropTypes.bool
}
export default AuthForm