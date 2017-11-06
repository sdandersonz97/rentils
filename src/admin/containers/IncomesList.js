import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableHeader
} from "../../common";
import { fetchCompanyIncomes } from "../actions/accounting";
import { fetchCompanyEmployees } from "../actions/employees";
class IncomeList extends Component {
  componentDidMount() {
    const { companyId } = this.props.match.params;
    this.props.fetchCompanyIncomes(companyId, localStorage.getItem("token"));
    this.props.fetchCompanyEmployees(companyId);
  }
  renderRows = incomesId => {
    const { incomes, employees } = this.props;
    return (
      <tr key={incomesId}>
        <td>${incomes[incomesId].mount}</td>
        <td>{incomes[incomesId].tenant}</td>
        <td>{incomes[incomesId].quantity}</td>
        <td>
          {incomes[incomesId].observation
            ? incomes[incomesId].observation
            : "NOTHING TO OBSERVE"}
        </td>
        <td>
          {employees[incomes[incomesId].uid]
            ? employees[incomes[incomesId].uid].fullname
            : ""}
        </td>
      </tr>
    );
  };
  renderEmpty = () => (
    <tr>
      <td>Nothing to show</td>
      <td />
    </tr>
  );
  render() {
    const { incomes } = this.props;
    const incomesId = Object.keys(incomes);
    return (
      <section className="content">
        <div className="container-fluid">
          <Card>
            <CardHeader title="Incomes" category="" />
            <CardBody>
              <Table>
                <TableHeader
                  titles={[
                    "MOUNT",
                    "TENANT",
                    "MONTHS",
                    "OBSERVATION",
                    "EMPLOYEE"
                  ]}
                />
                <TableBody>
                  {incomesId.length > 0
                    ? incomesId.map(this.renderRows)
                    : this.renderEmpty()}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </section>
    );
  }
}
const mapStatetoProps = ({ incomes, employees }) => {
  return {
    incomes,
    employees: employees.employeesList
  };
};
export default withRouter(
  connect(mapStatetoProps, { fetchCompanyIncomes, fetchCompanyEmployees })(
    IncomeList
  )
);
