import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { unauthUser } from '../actions'
class Signout extends Component {
    componentDidMount(){
        this.props.unauthUser()
    }
    render(){
        return(
            <div>Sorry To see you leave</div>
        )
    }
}
export default connect(null,{ unauthUser })(Signout)