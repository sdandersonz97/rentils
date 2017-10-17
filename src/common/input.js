import React from 'react'

export const Input = ({ label, onChange, value, type, error }) => (
    <div className='form-group'>
        <label>{label}</label>
        <input
            className='form-control'
            onChange={({ target }) => onChange(target.value)}
            type={type}
            value={value}
        />
        <div className='invalid-feedback'>
        </div>
    </div>
)

