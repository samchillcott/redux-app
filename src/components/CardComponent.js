import React from 'react'

const CardComponent = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.user.name}</h5>
                <h6 className="">{props.user.company.name}</h6>
                <p className="card-text">{props.user.company.name}</p>
        </div>
        </div>
    )
}

export default CardComponent
