import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// Components
import SignUpFormContainer from './session/signup_form_container';
import SignInFormContainer from './session/signin_form_container';
import LandingNav from './landing/landing_nav';
import LandingMain from './landing/landing_main';
import LandingFooter from './landing/landing_footer';
import HomeContainer from './home/home_container';

const App = () => (
    <div>
        <AuthRoute path='/' component={LandingNav} />
        
        <AuthRoute exact path='/' component={LandingMain} />
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <AuthRoute exact path='/signin' component={SignInFormContainer} />

        <AuthRoute path='/' component={LandingFooter} />
        <ProtectedRoute path='/' component={HomeContainer} />
    </div>
);

export default App;