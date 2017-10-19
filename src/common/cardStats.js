import React from 'react'
import PropTypes from 'prop-types'

export const CardStats = ({ children, style }) => (
    <div className='card card-stats' style={style}>
        {children}
    </div>
)

CardStats.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.element, PropTypes.array ]).isRequired,
    style: PropTypes.object
}
