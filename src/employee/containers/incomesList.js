import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Card, CardBody, CardHeader, Table, TableBody, TableHeader } from '../../common'
import { fetchCompanyIncomes } from '../actions/accounting'
class IncomeList extends Component {
    componentDidMount(){
        const { companyId } = this.props.match.params
        this.props.fetchCompanyIncomes(companyId, localStorage.getItem('token'))
    }
    renderRows = incomesId => {
        const { incomes } = this.props
        return(
            <tr key={incomesId}>
                <td>${incomes[incomesId].mount}</td>
                <td>{incomes[incomesId].tenant}</td>
                <td>{incomes[incomesId].quantity}</td>
                <td>
                    {incomes[incomesId].observation 
                    ? incomes[incomesId].observation 
                    : 'NOTHING TO OBSERVE'}
                </td>
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
        const { incomes } = this.props
        const incomesId = Object.keys(incomes)
        return(
            <section className='content'>
                <div className='container-fluid'>
                    <Card>
                        <CardHeader title='Incomes' category='' />
                        <CardBody>
                            <Table>
                                <TableHeader titles={['MOUNT','TENANT','MONTHS','OBSERVATION']}/>
                                <TableBody>
                                    {incomesId.length > 0 
                                        ? incomesId.map(this.renderRows)
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
const mapStatetoProps = ({ incomes }) => {
    return {
        incomes
    }
}
export default withRouter(connect(mapStatetoProps, { fetchCompanyIncomes })(IncomeList))