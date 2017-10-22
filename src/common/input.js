import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({ label, onChange, value, type, error, ...rest }) => (
    <div className='form-group'>
        <label>{label}</label>
        <input
            className='form-control'
            onChange={({ target }) => onChange(target.value)}
            type={type}
            value={value}
            {...rest}
        />
        <div className='invalid-feedback'>
        </div>
    </div>
)

Input.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
    error: PropTypes.string
}

