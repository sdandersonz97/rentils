import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const AsideBarItem = ({ route, icon, title, location }) => (
  <li className={location === route ? "active" : ""}>
    <Link className="nav-link" to={route}>
      <i className="material-icons">{icon}</i>
      <p className="nav-item">{title}</p>
    </Link>
  </li>
);

AsideBarItem.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  icon: PropTypes.string
};
