import React from "react";
import { connect } from "react-redux";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";

const AppBar = ({ isAuthenticated }) => {
  return (
    <header>
      {/* <Navigation /> */}
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
