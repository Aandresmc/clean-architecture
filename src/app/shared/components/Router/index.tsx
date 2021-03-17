import { Route, Switch } from "react-router-dom";
import React from "react";
import { IRoute } from "../../types";

interface Props {
  routes: IRoute[];
}
export const RouterComponent: React.FC<Props> = ({ routes }) => (
  <Switch>
    {routes.map((route, index) => (
      <Route key={index} {...route} />
    ))}
  </Switch>
);
