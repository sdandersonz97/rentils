import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableHeader
} from "../../common";
import { fetchPaymentsNotes } from "../actions/operations";
import { dayLeft, formatNumbers } from "../../utils/helpers";
class PaymentNotesList extends Component {
  componentDidMount() {
    const { companyId } = this.props.match.params;
    this.props.fetchPaymentsNotes(companyId, localStorage.getItem("token"));
  }
  renderRows = paymentNoteId => {
    const { companyId } = this.props.match.params;
    const { paymentNotes } = this.props;
    return paymentNotes[paymentNoteId].valid ? (
      <tr key={paymentNoteId}>
        <td>
          <Link to={`/company/${companyId}/user/paymentnotes/${paymentNoteId}`}>
            {" "}
            Complete{" "}
          </Link>}
        </td>
        <td>${formatNumbers(paymentNotes[paymentNoteId].mount)}</td>
        <td>${formatNumbers(paymentNotes[paymentNoteId].rest)}</td>
        <td>{paymentNotes[paymentNoteId].tenant}</td>
        <td>{paymentNotes[paymentNoteId].description}</td>
        <td>{dayLeft(paymentNotes[paymentNoteId].paymentDate)}</td>
      </tr>
    ) : (
      <tr key={paymentNoteId}>
        <td> Completed</td>
        <td>
          ${formatNumbers(
            paymentNotes[paymentNoteId].mount + paymentNotes[paymentNoteId].rest
          )}
        </td>
        <td>${formatNumbers(0)}</td>
        <td>{paymentNotes[paymentNoteId].tenant}</td>
        <td>{paymentNotes[paymentNoteId].description}</td>
        <td>---</td>
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
    const { paymentNotes } = this.props;
    const paymentNotesId = Object.keys(paymentNotes);
    return (
      <section className="content">
        <div className="container-fluid">
          <Card>
            <CardHeader title="Payment Notes" category="" />
            <CardBody>
              <Table>
                <TableHeader
                  titles={[
                    "PRESS TO COMPLETE",
                    "MOUNT",
                    "REST",
                    "TENANT",
                    "DESCRIPTION",
                    "DAYS LEFT"
                  ]}
                />
                <TableBody>
                  {paymentNotesId.length > 0
                    ? paymentNotesId.map(this.renderRows)
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
const mapStatetoProps = ({ paymentNotes }) => {
  return {
    paymentNotes
  };
};
export default withRouter(
  connect(mapStatetoProps, { fetchPaymentsNotes })(PaymentNotesList)
);
