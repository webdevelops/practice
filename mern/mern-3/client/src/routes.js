import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LinksPage } from './pages/LinksPage';
import { AuthPage } from './pages/AuthPage';
import { CreatePage } from './pages/CreatePage';
import { DetailPage } from './pages/DetailPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>      
          <LinksPage />
        </Route>
        <Route path="/create">
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }

  return (
    <Switch>
      {/* <Route path="/links" exact component={AuthPage} /> */}
      <Route exact path="/" >
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};