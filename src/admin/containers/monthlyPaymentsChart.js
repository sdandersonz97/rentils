import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCompanyIncomes } from "../actions/accounting";
import { LineChart } from "../../common/";
import { withRouter } from "react-router-dom";
import { getMonthlyPayments, months } from "../../utils/helpers";
class MonthlyPaymentsChart extends Component {
  componentDidMount() {
    const { companyId } = this.props.match.params;
    this.props.fetchCompanyIncomes(companyId);
  }
  render() {
    return <LineChart labels={months} data={this.props.monthlyPayments} />;
  }
}
function mapStateToProps({ incomes }) {
  return {
    monthlyPayments: getMonthlyPayments(incomes)
  };
}
export default withRouter(
  connect(mapStateToProps, { fetchCompanyIncomes })(MonthlyPaymentsChart)
);
