import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCompanyIncomes } from "../actions/accounting";
import { LineChart } from "../../common";
import { getWeekPayments, days } from "../../utils/helpers";
import { withRouter } from "react-router-dom";
class WeekPaymentsChart extends Component {
  componentDidMount() {
    const { companyId } = this.props.match.params;
    this.props.fetchCompanyIncomes(companyId);
  }
  render() {
    return <LineChart labels={days} data={this.props.weekPayments} />;
  }
}
function mapStateToProps({ incomes }) {
  return {
    weekPayments: getWeekPayments(incomes)
  };
}
export default withRouter(
  connect(mapStateToProps, { fetchCompanyIncomes })(WeekPaymentsChart)
);
