import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';
import Loader from 'react-loader-spinner';

const Main = () => {
  return (
    <main>
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
          {mainRoutes.map(route => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.name}
            />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
