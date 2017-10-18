import React from 'react'
import PropTypes from 'prop-types'

export const CardBody = ({ children }) => (
    <section className='card-content row' style={{margin:20}}>
        {children}
    </section>
    
)

CardBody.propType = {
    children:PropTypes.oneOfType([ PropTypes.element, PropTypes.array ]).isRequired
}

