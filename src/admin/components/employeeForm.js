import React, { Component } from "react";
import AuthForm from "../../auth/components/authForm";
import { signupEmployee } from "../../auth/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class EmployeeForm extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    fullname: "",
    cod: ""
  };
  onInputChanges = (input, value) => this.setState({ [input]: value });
  onSubmit = e => {
    const { companyId } = this.props.match.params;
    const { email, password, confirmPassword, fullname, cod } = this.state;
    e.preventDefault();
    if (password === confirmPassword) {
      this.props.signupEmployee({ companyId, email, password, fullname, cod });
      this.setState({
        email: "",
        password: "",
        confirmPassword: "",
        fullname: "",
        cod: ""
      });
    } else {
      this.setState({
        password: "",
        confirmPassword: ""
      });
    }
  };
  render() {
    const { email, password, confirmPassword, fullname, cod } = this.state;
    return (
      <AuthForm
        email={email}
        password={password}
        fullname={fullname}
        cod={cod}
        confirmPassword={confirmPassword}
        onInputChange={this.onInputChanges}
        onSubmit={this.onSubmit}
        signup
        employee
      />
    );
  }
}
export default withRouter(connect(null, { signupEmployee })(EmployeeForm));
