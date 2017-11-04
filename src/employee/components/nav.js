import React from 'react'
const NavBar = () => {
    return(
        <nav className="navbar navbar-transparent navbar-absolute">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                </ul>
            </div>
        </div>
    </nav>
    )
}
export default NavBar