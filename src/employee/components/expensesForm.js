import React, { Component } from "react";
import { Card, CardHeader, CardBody, Input } from "../../common";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { addCompanyExpense } from "../actions/operations";
class ExpensesForm extends Component {
  state = {
    mount: 0,
    description: ""
  };
  onSubmit = e => {
    e.preventDefault();
    const { companyId } = this.props.match.params;
    const { selectedRental, onScreenChange, onSaved } = this.props;
    addCompanyExpense(companyId, {
      ...this.state,
      rentalId: selectedRental,
      uid: localStorage.getItem("token"),
      timestamp: Date.now()
    });
    onSaved(
      `Expense added with the description of ${this.state
        .description} with a mount of ${this.state.mount}`
    );
    this.resetState();
    onScreenChange("saved", "");
  };
  resetState = () => this.setState({ mount: 0, description: "" });
  render() {
    const { mount, description } = this.state;
    return (
      <Card size="9">
        <CardHeader title="expenses" category="" color="" />
        <CardBody>
          <form onSubmit={this.onSubmit}>
            <Input
              label="Mount"
              type="number"
              onChange={mount => this.setState({ mount })}
              value={mount}
              required
            />
            <label>Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={({ target }) =>
                this.setState({ description: target.value })}
              required
            />
            <button type="submit" className="btn btn primary">
              {" "}
              submit{" "}
            </button>
          </form>
        </CardBody>
      </Card>
    );
  }
}
ExpensesForm.propTypes = {
  onScreenChange: PropTypes.func,
  selectedRental: PropTypes.string.isRequired
};
export default withRouter(ExpensesForm);
