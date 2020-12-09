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

import MainNavContainer from './main_nav/main_nav_container';
import MainContainer from './main_nav/main_container';
import SidebarContainer from './sidebar/sidebar_container';
import MyListIndexContainer from './articles/my_list_index_container';
import DiscoverIndexContainer from './articles/discover_index_container';

const App = () => (
    <React.Fragment>
        <main className="landing-container">
            <AuthRoute path='/' component={LandingNav} />
            <AuthRoute exact path='/' component={LandingMain} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
            <AuthRoute exact path='/signin' component={SignInFormContainer} />
            <AuthRoute path='/' component={LandingFooter} />
        </main>
        <ProtectedRoute path='/' component={MainContainer} />
    </React.Fragment>
);

export default App;