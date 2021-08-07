import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';

const AsyncHomePage = lazy(() => import('../../pages/homePages/HomePage'));
const AsyncContactsPage = lazy(() =>
  import('../../pages/contactPages/ContactsPage'),
);
const AsyncRegistrPage = lazy(() =>
  import('../../pages/registerPages/RegisterPage'),
);
const AsyncLoginPage = lazy(() => import('../../pages/loginPages/LoginPage'));

const Main = () => {
  return (
    <main>
      <div className="container">
        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={80}
              width={80}
              className="loader"
            />
          }
        >
          <Switch>
            <Route exact path="/" component={AsyncHomePage} />
            <PrivateRoute path="/contacts" component={AsyncContactsPage} />
            <PublicRoute
              path="/register"
              restricted
              component={AsyncRegistrPage}
            />
            <PublicRoute path="/login" restricted component={AsyncLoginPage} />
          </Switch>
        </Suspense>
      </div>
    </main>
  );
};

export default Main;
