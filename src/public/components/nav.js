import React from "react";
import { Link } from "react-router-dom";
const Nav = () => (
  <nav>
    <div className="row">
      <ul className="main-nav">
        <li>
          <Link to="/login">Sign in</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
      </div>
  </nav>
);
export default Nav;
