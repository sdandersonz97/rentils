import React from 'react'
import PropTypes from 'prop-types'

export const CardStatsHeader = ({ icon, color, iconColor }) => (
    <div className='card-header' data-background-color={color}>
        <i className='material-icons' style={{color:iconColor}}>{icon}</i>
    </div>
)
CardStatsHeader.propTypes = {
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    color: PropTypes.string
}
