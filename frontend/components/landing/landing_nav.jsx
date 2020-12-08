import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingNav extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Rocket 🚀</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/signin'>Log In</Link>
            </div>
        )
    }
}
