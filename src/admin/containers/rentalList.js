import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableHeader,
  DropdownButton
} from "../../common";
import { withRouter, Link } from "react-router-dom";
import { fetchCompanyRentals } from "../actions/rentals";
import { fetchCompanyEmployees } from "../actions/employees";
import { formatNumbers } from "../../utils/helpers";
class RentalList extends Component {
  state = {
    filter: "all"
  };
  componentDidMount() {
    const { companyId } = this.props.match.params;
    const {
      fetchCompanyRentals,
      rentalList,
      fetchCompanyEmployees
    } = this.props;
    fetchCompanyEmployees(companyId);
    Object.keys(rentalList).length === 0 && fetchCompanyRentals(companyId);
  }
  onClickChangeFilter = filter => {
    this.setState({
      filter
    });
  };
  renderOptions = () => [
    { name: "Rented", onClick: () => this.onClickChangeFilter("rented") },
    { name: "Available", onClick: () => this.onClickChangeFilter("available") },
    { name: "All", onClick: () => this.onClickChangeFilter("all") }
  ];
  renderRows = rentalId => {
    const { rentalList, employeesList } = this.props;
    const { companyId } = this.props.match.params;
    return (
      <tr key={rentalId}>
        <td>
          <Link to={`/company/${companyId}/admin/rentals/rental/${rentalId}`}>
            {rentalList[rentalId].cod}
          </Link>
        </td>
        <td>{rentalList[rentalId].address}</td>
        <td>{rentalList[rentalId].available ? "AVAILABLE" : "RENTED"}</td>
        <td>{formatNumbers(rentalList[rentalId].cost)}</td>
        <td>{rentalList[rentalId].description}</td>
        <td>
          {formatNumbers(rentalList[rentalId].min)} - {formatNumbers(rentalList[rentalId].max)}
        </td>
        <td>
          {rentalList[rentalId].assigned
            ? employeesList[rentalList[rentalId].assigned].fullname
            : "NO"}
        </td>
      </tr>
    );
  };
  filterRentalList = () => {
    const { rentalList } = this.props;
    const { filter } = this.state;
    return filter === "all"
      ? Object.keys(rentalList)
      : filter === "available"
        ? Object.keys(rentalList).filter(rental => rentalList[rental].available)
        : Object.keys(rentalList).filter(
            rental => !rentalList[rental].available
          );
  };
  render() {
    return (
      <Card>
        <CardHeader title="Rentals" category="All the rentals" />
        <CardBody>
          <DropdownButton title="filter" options={this.renderOptions()} />
          <Table>
            <TableHeader
              titles={[
                "COD",
                "ADDRESS",
                "DISPONIBILITY",
                "COST",
                "DESCRIPTION",
                "RANGE",
                "ASSIGNED"
              ]}
            />
            <TableBody>
              {this.filterRentalList().map(this.renderRows)}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = ({ rentals, employees }) => {
  return {
    rentalList: rentals.rentalList,
    employeesList: employees.employeesList
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchCompanyRentals, fetchCompanyEmployees })(
    RentalList
  )
);
