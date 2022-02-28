import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { userSelector } from './redux/selector';

const ProtectedRouters = () => {
  const user = useSelector(userSelector);
  return user.isLogginSucc ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouters;
