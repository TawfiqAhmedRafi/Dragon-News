import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Page/Loading';

const PrivateRoute = ({children}) => {
    const {user , loading , setLoading } = use(AuthContext);
    if(loading){
        return  <Loading></Loading>
    }
    if(user && user?.email){return  children}
    else {
        return <Navigate to='/auth/login' >Login</Navigate>
    }
    
};

export default PrivateRoute;