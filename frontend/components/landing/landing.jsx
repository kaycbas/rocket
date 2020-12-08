import React, { Component } from 'react';
import LandingNav from './landing_nav';
import LandingMain from './landing_main';
import LandingFooter from './landing_footer';

export default class Landing extends Component {
    render() {
        return (
            <div>
                <LandingNav />
                <LandingMain />
                <LandingFooter />
            </div>
        )
    }
}
