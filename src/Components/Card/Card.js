import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
const Card = (props) => {

    const { id, name, description, img } = props.activity;
    return (
        <div className="col">

            <div className="card text-center border border-warning">
                <img src={img} className="card-img-top w-100 img"
                    alt="" />
                <div className="card-body">

                    <h5 className="card-title text-danger">{name}</h5>

                    <p className="card-text text-white">{description}</p>
                    <Link to={`/Details/${id}`}>
                        <button className="btn-primary">See Details</button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Card;