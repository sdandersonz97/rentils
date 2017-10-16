import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class AdminApp extends Component {
    state = {
        companyName: ''
    }
    componentDidMount(){
    }
    render(){
        return(
            <div className="wrapper"> 
                <div className="main-panel">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
AdminApp.propTypes = {
  children: PropTypes.element.isRequired
}
export default AdminApp