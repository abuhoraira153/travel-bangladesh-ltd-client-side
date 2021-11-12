import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, name, description, img} = service;
    return (
        <div className = "service">
            <img src={img} alt="" />
            <h3 className="py-3">{name}</h3>
            <p className= "px-3 text-dark">{description}</p>
            <Link to = {`/placeOrder/${_id}`}>
                <button className = "btn btn-warning">Book Now</button>
            </Link>
        </div>
    );
};

export default Service;