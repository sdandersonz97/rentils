import React from "react";
import { Card, CardBody, CardHeader } from "../../common";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const AuthForm = ({
  email,
  password,
  confirmPassword,
  onInputChange,
  onSubmit,
  signup,
  employee,
  fullname,
  cod,
  error
}) => {
  return (
    <Card>
      {employee && (
        <CardHeader title="Employee" category="Register an employee" color="" />
      )}
      <CardBody>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            {employee && [
              <div key="fullname" className="form-group">
                <label>Full Name: </label>
                <input
                  className="form-control"
                  type="text"
                  value={fullname}
                  onChange={({ target }) =>
                    onInputChange("fullname", target.value)}
                  required
                />
                <div className="invalid-feedback" />
              </div>,
              <div key="cod" className="form-group">
                <label>cod: </label>
                <input
                  className="form-control"
                  type="text"
                  value={cod}
                  onChange={({ target }) => onInputChange("cod", target.value)}
                  required
                />
                <div className="invalid-feedback" />
              </div>
            ]}
            <label>Email: </label>
            <input
              className="form-control"
              onChange={({ target }) => onInputChange("email", target.value)}
              type="text"
              value={email}
              required
            />
            <div className="invalid-feedback" />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={({ target }) => onInputChange("password", target.value)}
              required
            />
            <div className="invalid-feedback" />
          </div>
          {signup && (
            <div className="form-group">
              <label>Confirm Password: </label>
              <input
                className="form-control"
                type="password"
                value={confirmPassword}
                required
                onChange={({ target }) =>
                  onInputChange("confirmPassword", target.value)}
              />
              <div className="invalid-feedback" />
            </div>
          )}
          <div className="bg-danger">{error}</div>
          <button type="submit" className="btn btn primary">
            {" "}
            {signup ? "Signup" : "Log in"}{" "}
          </button>
        </form>
      </CardBody>
    </Card>
  );
};
AuthForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string,
  signup: PropTypes.bool,
  employee: PropTypes.bool,
  fullname: PropTypes.string,
  cod: PropTypes.string
};
const mapStateToProps = ({ auth }) => {
  return {
    error: auth.messageError
  };
};
export default connect(mapStateToProps)(AuthForm);
