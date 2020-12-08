import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingNav extends Component {
    render() {
        return (
            <header className="landing-header-container">
                <div className="landing-header-content">
                    <Link to='/' className="landing-logo">
                        {/* <img src="assets/images/rocket_logo.png" alt="Couldn't load" /> */}
                        <h1>🚀 rocket</h1>
                    </Link>
                    <ul className="minimal-header">
                        <Link to='/signup'>
                            <button className="landing-signup-btn">Sign Up</button>
                        </Link>
                        <Link to='/signin' className="btn">
                            <button className="landing-signin-btn">Log In</button>
                        </Link>
                    </ul>
                </div>
            </header>
        )
    }
}
