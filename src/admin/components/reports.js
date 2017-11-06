import React from 'react'
import { Link, withRouter } from 'react-router-dom'
const Report = ({ match }) => (
    <div className='content'>
        <Link className='btn btn-primary' to={`/company/${match.params.companyId}/admin/reports/week`}> Week incomes </Link>
        <Link className='btn btn-primary' to={`/company/${match.params.companyId}/admin/reports/month`}> Month incomes </Link>
        <Link className='btn btn-primary' to={`/company/${match.params.companyId}/admin/reports/year`}> Year incomes </Link>
    </div>
)

export default withRouter(Report)