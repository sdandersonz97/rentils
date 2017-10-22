import React from 'react'
import PropTypes from 'prop-types'

export const CardStatsBody = ({ category, title, children, extend }) => (
    <div className='card-content'>
        <p className='category'>{category}</p>
        {extend ? children : <h3  style={{color:'#767b7d', fontSize:30}}>{title}</h3> }
    </div>
)


CardStatsBody.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    category: PropTypes.string.isRequired
}