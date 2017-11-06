import React from "react";
import { Link } from "react-router-dom";
const Nav = () => (
  <nav>
    <div className="row">
      <div className="col col-md-12 col-sm-12 col-xs-12">
      <ul className="main-nav" style={{marginRight:20}}>
        <li>
          <Link to="/login">Sign in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
);
export default Nav;
