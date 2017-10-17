import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
export const AsideBar = (props) =>{
    return(
        <aside className='sidebar' data-color='purple' data-image='../assets/img/sidebar-3.jpg'>
            <div className='logo'>
                <Link to={props.rootRoute} className='simple-text'>
                    {props.header}
                </Link>
            </div>
            <div className='sidebar-wrapper'>
                <ul className='nav'>
                    {props.children}
                </ul>
            </div>
        </aside>
        
    )
}

AsideBar.propTypes = {
    rootRoute: PropTypes.string,
    header: PropTypes.string,
    children: PropTypes.element.isRequired
}

