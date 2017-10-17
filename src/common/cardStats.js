import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const CardStats = ({ children }) => (
    <div className='card card-stats'>
        {children}
    </div>
)

CardStats.propTypes = {
    children: PropTypes.element.isRequired
}
