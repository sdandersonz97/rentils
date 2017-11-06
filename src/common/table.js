import React from "react";
import PropTypes from "prop-types";

export const Table = ({ children }) => (
  <div className="table-responsive">
    <table className="table table-hover">{children}</table>
  </div>
);

Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};
