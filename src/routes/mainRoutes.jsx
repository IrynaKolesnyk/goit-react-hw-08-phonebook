import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/homePages/HomePage')),
    isPrivate: false,
    isRestricted: false,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    exact: false,
    component: lazy(() => import('../pages/contactPages/ContactsPage')),
    isPrivate: true,
    isRestricted: false,
  },
  {
    path: '/register',
    name: 'Sign Up',
    exact: false,
    component: lazy(() => import('../pages/registerPages/RegisterPage')),
    isPrivate: false,
    isRestricted: true,
  },
  {
    path: '/login',
    name: 'Login',
    exact: false,
    component: lazy(() => import('../pages/loginPages/LoginPage')),
    isPrivate: false,
    isRestricted: true,
  },
];
