import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from './../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://stark-sands-14110.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id = "services" className = "my-5">
            <h2 className = "text-primary">Our Services</h2>
            <div className = "service-container">
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;