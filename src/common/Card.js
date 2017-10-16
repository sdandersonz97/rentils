import React from 'react'

export const Card = (props) => {
    return(
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
