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
        const incomesKeys = Object.keys(incomes)
        return incomesKeys
    }
    renderRows = incomesId => {
        const { incomes } = this.props
        return(
            <tr key={incomesId}>
                <td>${incomes[incomesId].mount}</td>            
                <td>{incomes[incomesId].quantity}</td>
                <td>{incomes[incomesId].tenant}</td>
            </tr>
        )
    }
    render(){
        return(
            <Table>
                <TableHeader  titles={['MOUNT','MONTHS PAID', 'TENANT']}/>
                <TableBody>
                    {this.filterIncomes().map(this.renderRows)}
                </TableBody>
                <button onClick={()=>window.print()}> Print </button>
            </Table>
        )
    }
}
const mapStateToProps = ({ incomes }) => {
    return{
        incomes
    }
}
export default withRouter(connect(mapStateToProps, { fetchCompanyIncomes })(WeekReport))