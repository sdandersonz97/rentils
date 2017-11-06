import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCompanyExpenses } from "../actions/accounting";
import { LineChart } from "../../common/";
import { withRouter } from "react-router-dom";
import { getMonthlyPayments, months } from "../../utils/helpers";
class MonthlyExpensesChart extends Component {
  componentDidMount() {
    const { companyId } = this.props.match.params;
    this.props.fetchCompanyExpenses(companyId);
  }
  render() {
    return <LineChart labels={months} data={this.props.monthlyExpenses} />;
  }
}
function mapStateToProps({ expenses }) {
  return {
    monthlyExpenses: getMonthlyPayments(expenses)
  };
}
export default withRouter(
  connect(mapStateToProps, { fetchCompanyExpenses })(MonthlyExpensesChart)
);
