import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthenticationContext } from '../globalstates/Authentication';

export default function Protectedroutes() {
    const { authenticate } = useContext(AuthenticationContext);

    // Check authentication status
    return authenticate.status ? <Outlet /> : <Navigate to="/" />;
}
