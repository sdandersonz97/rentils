import React from "react";
import { connect } from "react-redux";
import { CardStats, CardStatsBody, CardStatsHeader } from "../../common";
import { withRouter } from "react-router-dom";
import { formatNumbers } from "../../utils/helpers";
const RentalExpenses = props => {
  return (
    <CardStats>
      <CardStatsHeader icon="money_off" color="red" />
      <CardStatsBody title={`$${formatNumbers(props.expenses)}`} category="EXPENSES" />
    </CardStats>
  );
};

const mapStateToProps = ({ rentals }) => {
  const { selectedRental } = rentals;
  return {
    expenses: selectedRental.expenses
  };
};
export default withRouter(connect(mapStateToProps)(RentalExpenses));
