import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingMain extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='landing-main-container'>
                    <section className="landing-panel">
                        <div className="landing-panel-content">
                            <h2>Knowledge is Rocket fuel.</h2>
                            <button className="email-signup-btn">Sign up with Email</button>
                        </div>
                    </section>
                </div>
                <div className='landing-main-container-2'>
                    <section className="landing-panel-2">
                        <div className="landing-panel-content-2">
                            <h2>Save content from everywhere.</h2>
                            <p>Save articles, videos and stories from any publication, page or app. Curate your own space filled with everything you can’t wait to learn.</p>
                        </div>
                        <div className="img-placeholder"></div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}