import React from "react";
import { Card, CardBody, CardHeader, Table, TableBody } from "../../common";

const AssignedRentalListMin = ({ render, renderTableHeader, renderButton }) => {
  return (
    <Card>
      <CardHeader title="Rentals" category="All the rentals" />
      <CardBody>
        <Table>
          {renderTableHeader()}
          <TableBody>{render()}</TableBody>
        </Table>
        {renderButton && renderButton()}
      </CardBody>
    </Card>
  );
};

export default AssignedRentalListMin;
