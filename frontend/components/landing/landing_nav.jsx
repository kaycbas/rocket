import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingNav extends Component {
    render() {
        return (
            <header className="landing-header-container">
                <div className="landing-header-content">
                    <Link to='/home' className="landing-logo">
                        <img className="logo" src={window.rocketLogo} alt="Couldn't load" />
                    </Link>
                    <ul className="minimal-header">
                        <Link to='/home/signup'>
                            <button className="landing-signup-btn">Sign Up</button>
                        </Link>
                        <Link to='/home/signin' className="btn">
                            <button className="landing-signin-btn">Log In</button>
                        </Link>
                    </ul>
                </div>
            </header>
        )
    }
}
