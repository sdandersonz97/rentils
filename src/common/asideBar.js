import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
export const AsideBar = ({ rootRoute, header, children, color }) => (
    <aside className='sidebar' data-color={color} data-image='../assets/img/sidebar-3.jpg'>
        <div className='logo'>
            <Link to={rootRoute} className='simple-text'>
                {header}
            </Link>
        </div>
        <div className='sidebar-wrapper'>
            <ul className='nav'>
                {children}
            </ul>
        </div>
    </aside>      
)

AsideBar.propTypes = {
    rootRoute: PropTypes.string,
    header: PropTypes.string,
    children: PropTypes.element.isRequired
}

