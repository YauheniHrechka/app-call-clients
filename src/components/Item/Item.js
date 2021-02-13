import React from 'react';
import './Item.scss';

const Item = ({ id, date, client, brand, phone }) => {
    return (
        <div key={id} className="item__container">
            <div className="item__section">
                <div>{id}</div>
                <div>{date}</div>
            </div>
            <div className="item__section">
                <div>{client}</div>
                <div>{brand}</div>
            </div>
            <div className="item__section">
                <div>{phone}</div>
                <div>
                    <span className="icon">&#x1F44D;</span>
                    <span className="icon">&#128078;</span>
                    <span className="icon">&#x270D;</span>
                </div>
            </div>
        </div>
    )
}

export default Item;