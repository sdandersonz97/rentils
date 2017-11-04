import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import AsideBarEmployee from './components/asideBar'
import NavBar from './components/nav'
class EmployeeApp extends Component {
    state = {
        companyName: ''
    }
    componentDidMount(){
    }
    render(){
        return(
            <div className='wrapper'> 
              <AsideBarEmployee/>
                <div className='main-panel'>
                    <NavBar/>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
EmployeeApp.propTypes = {
  children: PropTypes.array.isRequired
}
export default EmployeeApp