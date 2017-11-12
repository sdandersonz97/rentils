import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchCompanyIncomes,
  fetchCompanyExpenses
} from "../actions/accounting";
import { fetchCompanyEmployees } from "../actions/employees";
import { Table, TableBody, TableHeader } from "../../common";
import { formatNumbers } from "../../utils/helpers";
class Report extends Component {
  componentDidMount() {
    const { companyId } = this.props.match.params;
    this.props.fetchCompanyIncomes(companyId);
    this.props.fetchCompanyExpenses(companyId);
    this.props.fetchCompanyEmployees(companyId);
  }
  getTimeForReport = () => {
    const { time } = this.props.match.params;
    const weekAgo = 1000 * 60 * 60 * 24 * 7;
    const monthAgo = 1000 * 60 * 60 * 24 * 30;
    const yearAgo = 1000 * 60 * 60 * 24 * 365;
    return time === "week" ? weekAgo : time === "month" ? monthAgo : yearAgo;
  };
  getReportName = () => {
    const { time } = this.props.match.params;
    return time === "week"
      ? "Week Report"
      : time === "month" ? "Month Report" : "Year Report";
  };
  filter = type => {
    const { incomes, expenses } = this.props;
    const time = this.getTimeForReport();
    const keys =
      type === "incomes"
        ? Object.keys(incomes).filter(
            income => incomes[income].timestamp >= Date.now() - time
          )
        : Object.keys(expenses).filter(
            expense => expenses[expense].timestamp >= Date.now() - time
          );

    return keys;
  };
  renderPaymentsRows = incomesId => {
    const { incomes, employees } = this.props;
    return (
      <tr key={incomesId}>
        <td>${formatNumbers(incomes[incomesId].mount)}</td>
        <td>{incomes[incomesId].quantity}</td>
        <td>{incomes[incomesId].tenant}</td>
        <td>
          {employees[incomes[incomesId].uid]
            ? employees[incomes[incomesId].uid].fullname
            : ""}
        </td>
        <td />
      </tr>
    );
  };
  renderExpensesRows = expensesId => {
    const { expenses, employees } = this.props;
    return (
      <tr key={expensesId}>
        <td>${formatNumbers(expenses[expensesId].mount)}</td>
        <td>{expenses[expensesId].description}</td>
        <td>
          {employees[expenses[expensesId].uid]
            ? employees[expenses[expensesId].uid].fullname
            : ""}
        </td>
        <td />
      </tr>
    );
  };
  reduceIncomesToTotal = keys =>
    keys.reduce((a, c) => this.props.incomes[c].mount + a, 0);
  reduceExpensesToTotal = keys =>
    keys.reduce((a, c) => this.props.expenses[c].mount + a, 0);
  reduceToTotal = type => {
    const keys = this.filter(type);
    return type === "incomes"
      ? this.reduceIncomesToTotal(keys)
      : this.reduceExpensesToTotal(keys);
  };
  calculatePercentageExpended(income, expense) {
    if (income > 0) {
      return Math.round(expense / income * 100);
    }
    return 0;
  }
  render() {
    const totalIncomes = this.reduceToTotal("incomes");
    const totalExpenses = this.reduceToTotal("expenses");
    return (
      <section className="content row">
        <h1 className="text-center">{this.getReportName()}</h1>
        <div className="col-md-12">
          <h4 className="text-center">PAYMENTS</h4>
          <Table>
            <TableHeader
              titles={["MOUNT", "MONTHS PAID", "TENANT", "EMPLOYEE", "TOTAL"]}
            />
            <TableBody>
              {this.filter("incomes").map(this.renderPaymentsRows)}
              <tr>
                <td>TOTAL:</td>
                <td />
                <td />
                <td />
                <td>${formatNumbers(totalIncomes)}</td>
              </tr>
            </TableBody>
          </Table>
        </div>
        <div className="col-md-12">
          <h4 className="text-center">EXPENSES</h4>
          <Table>
            <TableHeader
              titles={["MOUNT", "DESCRIPTION", "EMPLOYEE", "TOTAL"]}
            />
            <TableBody>
              {this.filter("expenses").map(this.renderExpensesRows)}
              <tr>
                <td>TOTAL:</td>
                <td />
                <td />
                <td>${formatNumbers(totalExpenses)}</td>
              </tr>
            </TableBody>
          </Table>
        </div>
        <div className="col-md-12">
          <h4 className="text-center">FINAL REPORT</h4>
          <Table>
            <TableHeader
              titles={["TOTAL INCOMES", "TOTAL EXPENSES", "% EXPENDED"]}
            />
            <TableBody>
              <tr>
                <td>${formatNumbers(totalIncomes)}</td>
                <td>${formatNumbers(totalExpenses)}</td>
                <td>
                  %{this.calculatePercentageExpended(
                    totalIncomes,
                    totalExpenses
                  )}
                </td>
              </tr>
            </TableBody>
          </Table>
        </div>
        <button onClick={() => window.print()}> Print </button>
      </section>
    );
  }
}
const mapStateToProps = ({ incomes, expenses, employees }) => {
  return {
    incomes,
    expenses,
    employees: employees.employeesList
  };
};
export default withRouter(
  connect(mapStateToProps, {
    fetchCompanyIncomes,
    fetchCompanyExpenses,
    fetchCompanyEmployees
  })(Report)
);
