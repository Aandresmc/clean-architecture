import React, { lazy } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { container } from 'app/app.container';

import { UseCase } from 'app/core/use_case';

import { ILogin } from '../domain/entities/ilogin';

const Router: React.FC<RouteProps> = (props: RouteProps) => {

    const LoginPage = lazy(() => import('app/features/login/presentation'));
    
    const authUseCase: UseCase<ILogin.Params, ILogin.Response> = container.get('AuthenticationUseCase');

    return (
        <Route
            {...props}
            path="/login"
            exact
            render={props => (<LoginPage {...props} authUseCase={authUseCase} />)}
        />
    )

};

export default Router;

