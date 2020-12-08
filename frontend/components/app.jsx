import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';
import SignUpFormContainer from './session/signup_form_container';
import SignInFormContainer from './session/signin_form_container';
import Landing from './landing/landing';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Route exact path='/' component={Landing} />
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <AuthRoute exact path='/signin' component={SignInFormContainer} />
    </div>
);

export default App;