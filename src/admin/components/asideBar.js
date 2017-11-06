import React from 'react'
import { withRouter } from 'react-router-dom'
import { AsideBar, AsideBarItem } from '../../common'
const AsideBarAdmin = (props) => {
    const { companyId } = props.match.params
    const { pathname } = props.location
    const rootRoute = `/company/${companyId}/admin`
    const getRoute = screen => `${rootRoute}/${screen}`
    return(
        <AsideBar headerLink={getRoute('dashboard')} header='Rentils' color='red'>
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('dashboard')} 
                    title='Dashboard' 
                    icon='dashboard'
            />
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('rentals/new')} 
                    title='New Rental' 
                    icon='add_box'
            />
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('employees/new')} 
                    title='Register Employee' 
                    icon='person_add'
            />
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('employees')} 
                    title='Employees' 
                    icon='group'
            />
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('rentals')} 
                    title='Rentals' 
                    icon='list'
            />
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('rentals/assignments')} 
                    title='Assign Rentals' 
                    icon='assignment'
            />
 
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('reports')} 
                    title='Reports' 
                    icon='list'
            />
            <AsideBarItem 
                    location={pathname} 
                    route={'/signout'} 
                    title='Logout' 
                    icon='exit_to_app'
            />
        </AsideBar>
    )
}

export default withRouter(AsideBarAdmin)