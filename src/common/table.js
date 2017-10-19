import React from 'react'
import PropTypes from 'prop-types'

export const Table = ({ children }) => (
    <table className="table table-hover">
        {children}
    </table>
)

Table.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]).isRequired
}