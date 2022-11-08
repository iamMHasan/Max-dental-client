import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="w-16  flex h-16 items-center justify-center border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    }



    

    if(user?.uid){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;