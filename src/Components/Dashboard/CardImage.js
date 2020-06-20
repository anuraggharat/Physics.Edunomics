import React from 'react'


export default function CardImage(props) {
    return (
        <div className="row p-3 bg-light shadow-lg">
            <div className="col-lg-6 col-sm-12">
                <img src={props.image} className="w-50" height="100px" alt={props.title}></img>
            </div>
            <div className="col-lg-6 d-flex justify-content-center flex-column col-sm-12">
                <h4 className="">{props.title}</h4>
            </div>
        </div>
    )
}
