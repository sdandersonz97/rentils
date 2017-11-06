import React from "react";
import moment from "moment";
const info = [7, 4];
const warning = [3, 0];
const alert = -1;
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Oct",
  "Nov",
  "Dic"
];
export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const errorStyle = color => {
  return {
    fontSize: 18,
    position: "relative",
    top: 2,
    left: 20,
    color
  };
};
const getAlert = days => {
  return days <= info[0] && days >= info[1] ? (
    <i className="material-icons" style={errorStyle("#19c6f4")}>
      error
    </i>
  ) : days <= warning[0] && days >= warning[1] ? (
    <i className="material-icons" style={errorStyle("#f6ab2b")}>
      error
    </i>
  ) : (
    days <= alert && (
      <i className="material-icons" style={errorStyle("#ea432c")}>
        error
      </i>
    )
  );
};
export const dayLeft = paymentDate => {
  if (paymentDate) {
    const oneDay = 1000 * 60 * 60 * 24;
    const days = Math.floor((paymentDate - Date.now()) / oneDay);
    return (
      <span>
        {days} Days left {days <= info[0] && getAlert(days)}{" "}
      </span>
    );
  } else {
    return <span>---</span>;
  }
};

export const getWeekPayments = payments => {
  return Object.keys(payments)
    .filter(
      payment =>
        payments[payment].timestamp >= Date.now() - 1000 * 60 * 60 * 24 * 7
    )
    .reduce((a, c) => {
      days.map((day, index) => {
        if (moment(payments[c].timestamp).format("ddd") === day) {
          !a[index]
            ? (a[index] = 0 + payments[c].mount)
            : (a[index] = a[index] + payments[c].mount);
          return a;
        }
      });
      return a;
    }, []);
};

export const getMonthlyPayments = payments => {
  const yearAgo = Date.now() - 1000 * 60 * 60 * 24 * 365;
  return Object.keys(payments)
    .filter(payment => payments[payment].timestamp >= yearAgo)
    .reduce((a, c) => {
      months.map((month, index) => {
        if (moment(payments[c].timestamp).format("MMM") === month) {
          !a[index + 1]
            ? (a[index + 1] = 0 + payments[c].mount)
            : (a[index + 1] = a[index + 1] + payments[c].mount);
          return a;
        }
      });
      return a;
    }, []);
};
