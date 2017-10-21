import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import AsideBarEmployee from './components/asideBar'

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