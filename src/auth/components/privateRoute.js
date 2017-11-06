import React from "react";
import { Redirect, withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = rest;
  return (
    <Route
      {...rest}
      render={props =>
        auth.authenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));
