import React from 'react';

const Card = (props) => {
    return <>
        <div className="card_wrapper">
            <div className="card_container">
                <div className="top"
                    style={{ background: `url(${props.avatar}) no-repeat center center` }}
                ></div>
                <div className={`bottom`}>
                    <div className="left">
                        <div className="details">
                            <h6>{props.first_name} {props.last_name}</h6>
                            <p className="ml-3">{props.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Card;