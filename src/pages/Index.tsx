
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// This page now redirects to the Home component
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
