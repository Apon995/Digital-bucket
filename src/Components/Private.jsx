import React from 'react'
import useAuth from '../CustomHooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom';
import StartOnLoad from './LoadingComponents/StartOnLoad.jsx';

function Private({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    
    if (loading) {
        return <StartOnLoad/>
        
    }


    if (user) {
        return children;
    }
    return <Navigate state={location?.pathname} to='/Login' />


}

export default Private