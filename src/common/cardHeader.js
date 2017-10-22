import React from 'react'
import PropTypes from 'prop-types'

export const CardHeader = ({title, category, color, style}) => (
    <header className='card-header' style={style} data-background-color={color}>
        <h4 style={{fontSize:40, color:'white'}}>{title}</h4>
        <p className='category'>{category}</p>
    </header>
)


CardHeader.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
    style: PropTypes.object
}