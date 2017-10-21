import React from 'react'
import { withRouter } from 'react-router-dom'
import { AsideBar, AsideBarItem } from '../../common'
const AsideBarEmployee = (props) => {
    const { companyId } = props.match.params
    const { pathname } = props.location
    const rootRoute = `/company/${companyId}/user`
    const getRoute = screen => `${rootRoute}/${screen}`
    return(
        <AsideBar headerLink={getRoute('rentals')} header='Rentils' color='red'>
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('assignments')} 
                    title='Assigned' 
                    icon='assignment'
            />
        </AsideBar>
    )
}

export default withRouter(AsideBarEmployee)