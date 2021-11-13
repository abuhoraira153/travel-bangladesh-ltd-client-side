import React, { useEffect, useState } from 'react';

const ManageAllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://stark-sands-14110.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    const  handleDelete = id => {
        const url = `https://stark-sands-14110.herokuapp.com/services/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                alert('deleted')
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            }
            
        })
    }
     return (
        <div>
            <h2 className = "text-primary py-4">Mange all Services</h2>
            {
                services?.map(service => <div className = "service mb-4" key = {service._id}>
                        <img src={service.img} alt="" />
                        <h3 className="py-3">{service.name}</h3>
                        <p className= "px-3 text-dark">{service.description}</p>
                    <button className = "btn btn-warning btn-lg" onClick = {()=>handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageAllServices;