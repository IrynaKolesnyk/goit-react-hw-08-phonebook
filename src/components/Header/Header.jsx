import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';
import HeaderNavStyled from './HeaderNavStyled';

const Header = () => {
  return (
    <HeaderNavStyled>
      <ul className="navList">
        {mainRoutes.map(route => (
          <li key={route.name}>
            <NavLink
              to={route.path}
              exact={route.exact}
              activeClassName="activeLink"
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </HeaderNavStyled>
  );
};

export default Header;
