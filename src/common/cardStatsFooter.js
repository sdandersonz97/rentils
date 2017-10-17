import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const CardStatsFooter = ({ urlFooter, children, link }) => (
    <div className='card-footer'>
        <div className='stats'>
            {link 
                ? <Link to={urlFooter}> {children} </Link>
                : <p>{children}</p>}
        </div>
    </div> 
)

CardStatsFooter.propTypes = {
    urlFooter: PropTypes.string,
    link: PropTypes.bool,
    children: PropTypes.string,
}
