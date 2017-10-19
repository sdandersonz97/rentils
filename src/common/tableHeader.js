import React from 'react'
import PropTypes from 'prop-types'

export const TableHeader = ({ titles }) => (
    <thead>
        <tr>
            {titles.map(title => <th key={title}>{title}</th> )}
        </tr>
    </thead>
)

TableHeader.propTypes = {
    titles: PropTypes.array.isRequired
}