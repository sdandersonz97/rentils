import React from 'react'
import PropTypes from 'prop-types'

export const DropdownButton = ({ title, options }) => (
    <div className="btn-group">
        <button type="button" className="btn btn-default">{title}</button>
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
            {options.map(option => <li key={option.name}> <a onClick={option.onClick}>{option.name}</a> </li>)}
        </ul>
  </div>
)

DropdownButton.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        onClick: PropTypes.func
    })).isRequired
}