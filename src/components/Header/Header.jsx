import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';
const Header = () => {
  return (
    <nav>
      <ul>
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
    </nav>
  );
};

export default Header;
