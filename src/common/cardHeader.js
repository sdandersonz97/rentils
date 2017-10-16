import React from 'react'

export const CardHeader = ({title, category}) => {
    return(
        <div className="card-header" data-background-color="purple">
            <h4 className="title">{title}</h4>
            <p className="category">{category}</p>
        </div>
    )
}