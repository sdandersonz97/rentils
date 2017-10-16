import React from 'react'
import PropTypes from 'prop-types'

export const CardBody = ({ children }) => {
    return(
        <section className='card-content row' style={{margin:20}}>
            {children}
        </section>
    )
}

CardBody.propType = {
    children: PropTypes.element.isRequired
}

