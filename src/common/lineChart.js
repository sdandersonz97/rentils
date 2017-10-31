import React,{ Component } from 'react'
import ChartistGraph from 'react-chartist'
import PropTypes from 'prop-types'
export class LineChart extends Component {
    render(){
        const { labels, data, title, cardColor, category } = this.props
        const simpleLineChartData = {
            labels: labels,
            series: [data]
            }
        return(
            <div className="card">
                <div className="card-header card-chart" data-background-color={cardColor}>
                    <div className="ct-chart" id="dailySalesChart" ref="dailySalesChart">
                        <ChartistGraph data={simpleLineChartData} type={'Line'} />
                    </div>
                </div>
                <div className="card-content">
                    <h4>{title}</h4>
                    <p className="category">{category}</p>
                </div>
            </div>
        )
    }
}

LineChart.propTypes = {
    labels: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
    cardColor: PropTypes.string,
    category: PropTypes.string
}