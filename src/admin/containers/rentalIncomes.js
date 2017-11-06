import React from "react";
import { connect } from "react-redux";
import { CardStats, CardStatsBody, CardStatsHeader } from "../../common";
import { withRouter } from "react-router-dom";
const RentalIncomes = props => {
  return (
    <CardStats>
      <CardStatsHeader icon="attach_money" color="green" />
      <CardStatsBody title={`$${props.incomes}`} category="INCOMES" />
    </CardStats>
  );
};
const mapStateToProps = ({ rentals }) => {
  const { selectedRental } = rentals;
  return {
    incomes: selectedRental.incomes
  };
};

export default withRouter(connect(mapStateToProps)(RentalIncomes));
