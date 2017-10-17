import React from 'react'
import PropTypes from 'prop-types'

export const CardStatsHeader = ({ icon, color }) => (
    <div className='card-header' data-background-color={color}>
        <i className='material-icons'>{icon}</i>
    </div>
)
CardStatsHeader.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string
}
