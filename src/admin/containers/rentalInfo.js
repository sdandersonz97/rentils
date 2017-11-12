import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CardStats, CardStatsBody, CardStatsHeader } from "../../common";
import { fetchCompanyRental } from "../actions/rentals";
import { fetchCompanyEmployees } from "../actions/employees";
import { formatNumbers } from "../../utils/helpers";
class RentalInfo extends Component {
  componentDidMount() {
    const { companyId, rentalId } = this.props.match.params;
    this.props.fetchCompanyRental(companyId, rentalId);
    this.props.fetchCompanyEmployees(companyId);
  }
  render() {
    const { rental, employee } = this.props;
    return (
      <CardStats style={{ minHeight: 240 }}>
        <CardStatsHeader icon="bookmark" iconColor="white" color="purple" />
        <CardStatsBody category="RENTAL INFO" extend>
          <p style={{ marginTop: 60, textAlign: "left" }}>
            <strong>Cod:</strong> {rental.cod} <br />
            <strong>Address:</strong> {rental.address} <br />
            <strong>Description:</strong> {rental.description} <br />
            <strong>Range:</strong> {formatNumbers(rental.min)} - {formatNumbers(rental.max)} <br />
            <strong>Disponibility:</strong> {rental.assigned ? employee : "NO"}
          </p>
        </CardStatsBody>
      </CardStats>
    );
  }
}
const mapStateToProps = ({ rentals, employees }) => {
  const { selectedRental } = rentals;
  const { employeesList } = employees;
  return {
    rental: selectedRental,
    employee:
      selectedRental.assigned && employeesList[selectedRental.assigned]
        ? employeesList[selectedRental.assigned].fullname
        : ""
  };
};
export default withRouter(
  connect(mapStateToProps, { fetchCompanyRental, fetchCompanyEmployees })(
    RentalInfo
  )
);
