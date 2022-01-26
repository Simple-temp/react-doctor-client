import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const PrivateRoute = ({ children }) => {

    const [loggedInUser, setloggedInUser] = useState(UserContext)
    const location = useLocation();

    if(!loggedInUser.email)
    {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;