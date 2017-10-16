import React from 'react'
import PropTypes from 'prop-types'

export const CardHeader = ({title, category, color}) => {
    return(
        <header className='card-header' data-background-color={color}>
            <h4 className='title'>{title}</h4>
            <p className='category'>{category}</p>
        </header>
    )
}

CardHeader.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string
}