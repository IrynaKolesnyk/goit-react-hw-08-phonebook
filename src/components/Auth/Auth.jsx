import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthStyled from './AuthStyled';

const Auth = () => {
  return (
    <AuthStyled className="siteNav">
      <NavLink
        to="/register"
        className="navLink signUpLink"
        activeClassName="activeLink"
      >
        Sign Up
      </NavLink>
      <NavLink to="/login" className="navLink" activeClassName="activeLink">
        Login
      </NavLink>
    </AuthStyled>
  );
};

export default Auth;
