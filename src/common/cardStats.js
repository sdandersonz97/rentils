import React from 'react'
import PropTypes from 'prop-types'

export const CardStats = ({ children }) => (
    <div className='card card-stats'>
        {children}
    </div>
)

CardStats.propTypes = {
    children: PropTypes.array.isRequired
}
