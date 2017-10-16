import React from 'react'

export const CardBody = (props) => {
    return(
        <div className="card-content">
            {props.children}
        </div>
    )
}