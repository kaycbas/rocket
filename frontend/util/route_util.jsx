import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, signedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !signedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const Protected = ({ component: Component, path, signedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        signedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/home" />
        )
    )} />
);

const mSTP = state => {
    return { signedIn: Boolean(state.session.currentUser) };
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));