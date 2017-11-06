import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCompanyExpenses } from "../actions/accounting";
import { LineChart } from "../../common";
import { getWeekPayments, days } from "../../utils/helpers";
import { withRouter } from "react-router-dom";
class WeekExpensesChart extends Component {
  componentDidMount() {
    const { companyId } = this.props.match.params;
    this.props.fetchCompanyExpenses(companyId);
  }
  render() {
    return <LineChart labels={days} data={this.props.weekExpenses} />;
  }
}
function mapStateToProps({ expenses }) {
  return {
    weekExpenses: getWeekPayments(expenses)
  };
}
export default withRouter(
  connect(mapStateToProps, { fetchCompanyExpenses })(WeekExpensesChart)
);
