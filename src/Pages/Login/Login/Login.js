import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_ui = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_ui);
        })
    }
    return (
        <div className = "my-5">
            <h2 className = "text-primary my-5">Please Login</h2>
            <hr className = "w-50 mx-auto mb-4" />
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;