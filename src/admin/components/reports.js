import React from 'react'
import { Link, withRouter } from 'react-router-dom'
const Report = ({ match }) => (
    <section>
        <Link className='btn btn-primary' to={`/company/${match.params.companyId}/admin/reports/week`}> Week incomes </Link>
    </section>
)

export default withRouter(Report)