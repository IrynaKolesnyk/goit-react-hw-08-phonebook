import React from 'react';
import { NavLink } from 'react-router-dom';

const Auth = () => {
  return (
    <nav className="siteNav">
      <NavLink to="/register" className="navLink" activeClassName="activeLink">
        Sign Up
      </NavLink>
      <NavLink to="/login" className="navLink" activeClassName="activeLink">
        Login
      </NavLink>
    </nav>
  );
};

export default Auth;
