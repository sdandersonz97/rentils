import React, { Component } from 'react'
import WeekPaymentsChart from '../containers/weekPaymentsChart'
import MonthlyPaymentsChart from '../containers/monthlyPaymentsChart'

class PaymentsChart extends Component {
    state={
        timeline:'week'

    }
    onChangeTimeline = timeline => this.setState({ timeline })
    getOptions(){
        return this.state.timeline === 'week' 
            ?{timeline: 'week', title: 'Week Payments'}
            :{timeline: 'month', title: 'Monthly Payments'}
    }
    render(){
        const options = this.getOptions()
        return (
            <div className='card'>
            <div className='card-header card-chart' data-background-color={'green'}>
                {this.state.timeline === 'week' 
                    ?<WeekPaymentsChart/>
                    :<MonthlyPaymentsChart/>}
            </div>
            <div className='card-content'>
                <div className='dropdown' style={{ float:'right' }}>
                    <button className='btn btn-xs dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
                        <span className='caret'></span>
                    </button>
                    <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
                        <li><a href='#' onClick={()=>this.onChangeTimeline('month')}>Monthly</a></li>
                        <li><a href='#' onClick={()=>this.onChangeTimeline('week')}>Weekly</a></li>
                    </ul>
                </div>
                <h4>{options.title} </h4>
            </div>
        </div>
           
            
        )
    }
}
export default PaymentsChart