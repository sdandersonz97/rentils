import React from 'react'
import { withRouter } from 'react-router-dom'
import { AsideBar, AsideBarItem } from '../../common'
const AsideBarAdmin = (props) => {
    const { companyId } = props.match.params
    const { pathname } = props.location
    const rootRoute = `/company/${companyId}/admin`
    const getRoute = screen => `${rootRoute}/${screen}`
    return(
        <AsideBar rootRoute={rootRoute} header="Rentils">
            <AsideBarItem 
                    location={pathname} 
                    route={getRoute('dashboard')} 
                    title='Dashboard' 
                    icon='dashboard' 
            />
        </AsideBar>
    )
}

export default withRouter(AsideBarAdmin)