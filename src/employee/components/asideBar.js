import React from 'react'
import { withRouter } from 'react-router-dom'
import { AsideBar, AsideBarItem } from '../../common'
const AsideBarEmployee = (props) => {
    const { companyId } = props.match.params
    const { pathname } = props.location
    const rootRoute = `/company/${companyId}/user`
    const getRoute = screen => `${rootRoute}/${screen}`
    return(
        <AsideBar headerLink={getRoute('profile')} header='Rentils' color='red'>
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('profile')} 
                    title='Dashboard' 
                    icon='dashboard'
            />
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('assignments')} 
                    title='Assigned' 
                    icon='assignment'
            />
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('rent')} 
                    title='Register a Rent' 
                    icon='create'
            />
        </AsideBar>
    )
}

export default withRouter(AsideBarEmployee)