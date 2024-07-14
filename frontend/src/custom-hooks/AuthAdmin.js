import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthAdmin = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.userRole);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (userRole !== 'admin') {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AuthAdmin;
