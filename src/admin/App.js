import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import AsideBarAdmin from './components/asideBar'
class AdminApp extends Component {
    state = {
        companyName: ''
    }
    componentDidMount(){
    }
    render(){
        return(
            <div className='wrapper'> 
              <AsideBarAdmin/>
                <div className='main-panel'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
AdminApp.propTypes = {
  children: PropTypes.array.isRequired
}
export default AdminApp