import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchCompanyIncomes } from '../actions/accounting' 
import { Table, TableBody, TableHeader } from '../../common'

class WeekReport extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchCompanyIncomes(companyId)
    }
    filter = type => {
        const { incomes, expenses } = this.props
        const weekAgo = 1000 * 60 * 60* 24 * 7
        const keys = type === 'incomes' 
            ? Object.keys(incomes).filter(income => incomes[income].timestamp  >= Date.now() - weekAgo)
            : Object.keys(expenses).filter(expenses => expenses[expenses].timestamp  >= Date.now() - weekAgo)

        return keys
    }
    renderPaymentsRows = incomesId => {
        const { incomes } = this.props
        return(
            <tr key={incomesId}>
                <td>${incomes[incomesId].mount}</td>
                <td>{incomes[incomesId].quantity}</td>            
                <td>{incomes[incomesId].tenant}</td>
            </tr>
        )
    }
    renderExpensesRows = expensesId => {
        const { expenses } = this.props
        return(
            <tr key={expensesId}>
                <td>${expenses[expensesId].mount}</td>
                <td>{expenses[expensesId].description}</td>            
                <td>{expenses[expensesId].uid}</td>
            </tr>
        )
    }
    reduceIncomesToTotal = keys => keys.reduce((a,c) => this.props.incomes[c].mount + a, 0)
    reduceExpensesToTotal = keys => keys.reduce((a,c) => this.props.expenses[c].mount + a, 0)
    reduceToTotal = type => {
        const { incomes, expenses } = this.props
        const keys = this.filter(type)
        return type === 'incomes' ? this.reduceIncomesToTotal(keys) : this.reduceExpensesToTotal(keys)  
    }
    render(){
        return(
            <section className='content row'>
                <h1 className='text-center'>WEEK REPORT</h1>
                <div className='col-md-12'>
                    <h4 className='text-center'>PAYMENTS</h4>
                    <Table>
                        <TableHeader  titles={['MOUNT','MONTHS PAID', 'TENANT']}/>
                        <TableBody>
                            {this.filter('incomes').map(this.renderPaymentsRows)}
                            <tr>
                                <td>TOTAL:</td>
                                <td></td>            
                                <td>${this.reduceToTotal('incomes')}</td>
                            </tr>
                        </TableBody>
                    </Table>
                </div>
                <div className='col-md-12'>
                    <h4 className='text-center'>EXPENSES</h4>
                    <Table>
                        <TableHeader  titles={['MOUNT', 'DESCRIPTION', 'EMPLOYEE']}/>
                        <TableBody>
                            {this.filter('expenses').map(this.renderExpensesRows)}
                            <tr>
                                <td>TOTAL:</td>
                                <td></td>            
                                <td>${this.reduceToTotal('expenses')}</td>
                            </tr>
                        </TableBody>
                    </Table>
                </div>
                <button onClick={()=>window.print()}> Print </button>
            </section>
        )
    }
}
const mapStateToProps = ({ incomes, expenses }) => {
    return{
        incomes,
        expenses
    }
}
export default withRouter(connect(mapStateToProps, { fetchCompanyIncomes })(WeekReport))