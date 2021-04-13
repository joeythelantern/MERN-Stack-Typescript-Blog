import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import logging from '../../config/logging';
import UserContext from '../../contexts/user';

export interface IAuthRouteProps {}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props;

    const userContext = useContext(UserContext);

    if (userContext.userState.user._id === '')
    {
        logging.info('Unauthorized, redirecting.');
        return <Redirect to='/login' />
    }
    else
    {
        return <>{children}</>
    }
}

export default AuthRoute;