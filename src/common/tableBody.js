import React from 'react'
import PropTypes from 'prop-types'

export const TableBody = ({ children }) => (
    <tbody>
        {children}
    </tbody>
)
TableBody.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]).isRequired 
}