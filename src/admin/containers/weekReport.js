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
    filterIncomes = () => {
        const { incomes } = this.props
        const weekAgo = 1000 * 60 * 60* 24 * 7
        const incomesKeys = Object.keys(incomes).filter(income => incomes[income].timestamp  >= Date.now() - weekAgo)
        return incomesKeys
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
    reduceIncomesToTotal = () => {
        const { incomes } = this.props
        const incomesKeys = this.filterIncomes()
        return incomesKeys.reduce((a,c) => {
            return incomes[c].mount + a
        }, 0)   
    }
    render(){
        return(
            <section className='row'>
                <h1 className='text-center'>WEEK REPORT</h1>
                <div className='col-md-12'>
                    <h4 className='text-center'>PAYMENTS</h4>
                    <Table>
                        <TableHeader  titles={['MOUNT','MONTHS PAID', 'TENANT']}/>
                        <TableBody>
                            {this.filterIncomes().map(this.renderPaymentsRows)}
                            <tr>
                                <td>TOTAL:</td>
                                <td></td>            
                                <td>${this.reduceIncomesToTotal()}</td>
                            </tr>
                        </TableBody>
                    </Table>
                    <button onClick={()=>window.print()}> Print </button>
                </div>
              
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