import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import AsideBarItem from './asideBarItem'

const AsideBar = (props) =>{
    const { companyId } = props.match.params
    const { pathname } = props.location
    const rootRoute = `/company/${companyId}/admin`
    const getRoute = screen => `${rootRoute}/${screen}`

    return(
        <aside className="sidebar" data-color="purple" data-image="../assets/img/sidebar-3.jpg">
            <div className="logo">
                <Link to={rootRoute} className="simple-text">
                    {props.companyName}
                </Link>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <AsideBarItem 
                        location={pathname} 
                        route={getRoute('dashboard')} 
                        title='Dashboard' 
                        icon='dashboard' />
                </ul>
            </div>
        </aside>
        
    )
}

export default withRouter(AsideBar)