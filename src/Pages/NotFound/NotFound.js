import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound/404.jpg'

const NotFound = () => {
    return (
        <div className = "not-found">
            <img src={notFound} alt="" />
            <br />
            <Link to = "/">
                <button className = "btn btn-outline-primary btn-lg">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;