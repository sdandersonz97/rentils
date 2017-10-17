import React from 'react'
import PropTypes from 'prop-types'

export const CardStatsBody = ({ category, title }) => (
    <div className='card-content'>
        <p className='category'>{category}</p>
        <h3 className='title' style={{color:'black'}}>{title}</h3>
    </div>
)


CardStatsBody.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}