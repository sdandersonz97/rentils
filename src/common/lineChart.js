import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import PropTypes from "prop-types";
export class LineChart extends Component {
  render() {
    const { labels, data } = this.props;
    const simpleLineChartData = {
      labels: labels,
      series: [data]
    };
    return (
      <div className="ct-chart" id="dailySalesChart" ref="dailySalesChart">
        <ChartistGraph data={simpleLineChartData} type={"Line"} />
      </div>
    );
  }
}

LineChart.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};
