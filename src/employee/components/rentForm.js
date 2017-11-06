import React from "react";
import { Card, CardHeader, CardBody, Input } from "../../common";
import PropTypes from "prop-types";

const RentForm = ({
  onInputChange,
  values,
  onSubmit,
  cancelLink,
  onSetRange,
  onScreenChange
}) => {
  const { price, tenant, paymentDate } = values;
  const range = onSetRange();
  return (
    <Card size="9">
      <CardHeader
        title="Rent"
        category={`Range for rent ${range[0]} - ${range[1]}`}
        color=""
      />
      <CardBody>
        <form onSubmit={onSubmit}>
          <Input
            label="tenant"
            type="text"
            onChange={onInputChange.bind(this, "tenant")}
            value={tenant}
            required
          />
          <Input
            label="Price"
            type="number"
            min={range[0]}
            max={range[1]}
            onChange={onInputChange.bind(this, "price")}
            value={price}
            required
          />
          <Input
            label="Payment Day"
            type="date"
            onChange={onInputChange.bind(this, "paymentDate")}
            value={paymentDate}
            required
          />
          <button type="submit" className="btn btn primary">
            {" "}
            Submit{" "}
          </button>
          <button
            onClick={() => onScreenChange("Rentals")}
            className="btn btn primary"
          >
            {" "}
            Back{" "}
          </button>
        </form>
      </CardBody>
    </Card>
  );
};

RentForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  values: PropTypes.object,
  onSubmit: PropTypes.func
};
export default RentForm;
