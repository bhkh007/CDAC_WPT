// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  // Get user from local storage
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" />;
  }

  if (user.role !== 'admin') {
    // Redirect to homepage if user is not admin
    return <Navigate to="/" />;
  }

  // Render the provided element if user is authenticated and is admin
  return element;
};

export default ProtectedRoute;
