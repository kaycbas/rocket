import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import SignUpFormContainer from '../session/signup_form_container';
import SignInFormContainer from '../session/signin_form_container';
import LandingNav from './landing_nav';
import LandingMain from './landing_main';
import LandingFooter from './landing_footer';

export default class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <LandingNav />
                <Route exact path='/' component={LandingMain} />
                <Route exact path='/signup' component={SignUpFormContainer} />
                <Route exact path='/signin' component={SignInFormContainer} />
                <LandingFooter />
            </React.Fragment>
        )
    }
}
