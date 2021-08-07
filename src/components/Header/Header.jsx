import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';
import HeaderStyled from './HeaderNavStyled';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu/UserMenu';

const Header = ({ isAuthenticated }) => {
  return (
    <HeaderStyled>
      <nav>
        <ul className="navList">
          {mainRoutes.map(route => (
            <li key={route.name}>
              <NavLink
                to={route.path}
                exact={route.exact}
                activeClassName="activeLink"
                className="navLink"
              >
                {route.name}
              </NavLink>
            </li>
          ))}
          {isAuthenticated && <UserMenu />}
        </ul>
      </nav>
    </HeaderStyled>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
