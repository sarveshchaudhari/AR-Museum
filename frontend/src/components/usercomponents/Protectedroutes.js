import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthenticationContext } from '../globalstates/Authentication';

export default function Protectedroutes() {
  const { authenticate } = useContext(AuthenticationContext);
  return (
    authenticate.status ? <Outlet /> : <Navigate to="/" />
  )
}
