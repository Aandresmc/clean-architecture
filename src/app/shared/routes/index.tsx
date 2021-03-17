import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { AuthModule } from "app/features/login";

const AuthModuleRoutes = AuthModule.routes;

export function AppRouter() {
  const LoadingMessage = () => <div>Cargando...</div>;

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingMessage />}>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/login' />} />
          <AuthModuleRoutes />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
