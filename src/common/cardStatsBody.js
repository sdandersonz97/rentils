import React from 'react'
import PropTypes from 'prop-types'

export const CardStatsBody = ({ category, title, children, extend }) => (
    <div className='card-content'>
        <p className='category'>{category}</p>
        {extend ? children : <h3 className='title' style={{color:'black'}}>{title}</h3> }
    </div>
)


CardStatsBody.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    category: PropTypes.string.isRequired
}