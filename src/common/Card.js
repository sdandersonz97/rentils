import React from 'react'
import PropTypes from 'prop-types'
export const Card = ({ children, screen, size }) => {
    return(
        <section className='content'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className={`col-${ screen || 'md' }-${ size || 12 }`}>
                        <div className='card'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

Card.propTypes = {
    screen: PropTypes.string,
    size: PropTypes.number,
    children: PropTypes.element.isRequired
}

