import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, CardBody, CardHeader, Table, TableBody, TableHeader } from '../../common'
import { fetchCompanyExpenses } from '../actions/accounting'
class ExpensesList extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchCompanyExpenses(companyId, localStorage.getItem('token'))
    }
    renderRows = expensesId => {
        const { expenses } = this.props
        return(
            <tr key={expensesId}>
                <td>${expenses[expensesId].mount}</td>
                <td>{expenses[expensesId].description}</td>
            </tr>
        )
    }
    renderEmpty = () => (
        <tr>
            <td>Nothing to show</td>
            <td></td>
        </tr>
    )
    render(){
        const { expenses } = this.props
        const expensesId = Object.keys(expenses)
        return(
            <section className='content'>
                <div className='container-fluid'>
                    <Card>
                        <CardHeader title='expenses' category='' />
                        <CardBody>
                            <Table>
                                <TableHeader titles={['MOUNT','DESCRIPTION']}/>
                                <TableBody>
                                    {expensesId.length > 0 
                                        ? expensesId.map(this.renderRows)
                                        : this.renderEmpty()}
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </section>
        )
    }
}
const mapStatetoProps = ({ expenses }) => {
    return {
        expenses
    }
}
export default withRouter(connect(mapStatetoProps, { fetchCompanyExpenses })(ExpensesList))