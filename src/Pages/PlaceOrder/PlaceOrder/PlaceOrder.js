import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const {user} = useAuth()
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className = "row">
            <div className = "col-lg-6 bg-light w-75% my-4 mr-5">
            <img src={service.img} alt="" />
            <h3 className="py-3">{service.name}</h3>
            <p className= "px-3 text-dark">{service.description}</p>
            </div>
            <div className = "col-lg-6">
                <div className = "user my-4 mx- 3">
                <h3>User Name : {user?.displayName}</h3>
                <h3>User Eamil : {user?.email}</h3>
                </div>
            </div>
        </div>

    );
};

export default PlaceOrder;