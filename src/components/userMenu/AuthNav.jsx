import React from "react";
import { NavLink } from "react-router-dom";
const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className="register"
        activeStyle="linkActive"
      >
        Sign Up
      </NavLink>
      <NavLink to="/login" exact className="login" activeStyle="linkActive">
        Sign In
      </NavLink>
    </div>
  );
};

export default AuthNav;
