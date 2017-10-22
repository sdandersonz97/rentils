import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => (
    <nav className='navbar' style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderBottomWidth:0}}> 
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to='/'>Rentils</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to='/login' style={{color:'white'}} >Login</Link></li>
                    <li><Link to='/signup' style={{color:'white'}}>Get Started Now! </Link></li>
                </ul>
            
            </div>
        </div>
    </nav>
)
export default Nav