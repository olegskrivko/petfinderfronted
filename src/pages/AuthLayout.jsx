import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      {/* Auth layout might just include a background, form container, etc. */}
      <Outlet />  {/* This renders the Login or Register page */}
    </div>
  );
};

export default AuthLayout;
