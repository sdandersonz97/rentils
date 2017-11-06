import React, { Component } from "react";
import PropTypes from "prop-types";
import AsideBarAdmin from "./components/asideBar";
import NavBar from "./components/nav";
const AdminApp = props => {
  return (
    <div className="wrapper">
      <AsideBarAdmin />

      <div className="main-panel">
        <NavBar />
        {props.children}
      </div>
    </div>
  );
};
AdminApp.propTypes = {
  children: PropTypes.array.isRequired
};
export default AdminApp;
