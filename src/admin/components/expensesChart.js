import React, { Component } from 'react'
import WeekExpensesChart from '../containers/weekExpensesChart'
import MonthlyExpensesChart from '../containers/monthExpensesChart'
import { Link, withRouter } from 'react-router-dom'
class ExpensesChart extends Component {
    state={
        timeline:'week'

    }
    onChangeTimeline = timeline => this.setState({ timeline })
    getOptions(){
        return this.state.timeline === 'week' 
            ?{timeline: 'week', title: 'Week Expenses'}
            :{timeline: 'month', title: 'Monthly Expenses'}
    }
    render(){
        const options = this.getOptions()
        const { companyId } = this.props.match.params
        return (
            <div className='card'>
            <div className='card-header card-chart' data-background-color={'red'}>
                {this.state.timeline === 'week' 
                    ?<WeekExpensesChart/>
                    :<MonthlyExpensesChart/>}
            </div>
            <div className='card-content'>
                <div className='dropdown' style={{ float:'right' }}>
                    <button className='btn btn-xs dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
                        <span className='caret'></span>
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
                        <li><Link to={`/company/${companyId}/admin/dashboard`} onClick={()=>this.onChangeTimeline('month')}>Monthly</Link></li>
                        <li><Link to={`/company/${companyId}/admin/dashboard`} onClick={()=>this.onChangeTimeline('week')}>Weekly</Link></li>
                    </ul>
                </div>
                <h4>{options.title} </h4>
            </div>
        </div>
           
            
        )
    }
}
export default withRouter(ExpensesChart)