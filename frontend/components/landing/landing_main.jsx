import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingMain extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='landing-main-container'>
                    <div className='darken'>
                        <section className="landing-panel">
                            <div className="landing-panel-content">
                                <h2>Knowledge is Rocket fuel.</h2>
                                <button className="btn google">
                                    <img src={window.googleIcon} alt="logo" />
                                    <span>
                                        Sign up with Google
                                    </span>
                                </button>
                                <button className="btn email">Sign up with Email</button>
                                <span className="signin">
                                    <p>Already have an account?</p>
                                    <Link className="link" to='/signin'>Log In</Link> &gt;
                                </span>
                                <p className="terms">
                                    By signing up, you agree to Pocket’s Terms of Service and Privacy Policy.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='landing-main-container-2'>
                    <section className="landing-panel-2">
                        <div className="landing-panel-content-2">
                            <h2>Save content from everywhere.</h2>
                            <p>Save articles, videos and stories from any publication, page or app. Curate your own space filled with everything you can’t wait to learn.</p>
                        </div>
                        <div className="ipad"></div>
                    </section>
                </div>
                <div className='landing-main-container-3'>
                    <section className="landing-panel-3">
                        <div className="mac"></div>
                        <div className="landing-panel-content-3">
                            <h2>Fuel your mind anywhere.</h2>
                            <p>Immerse yourself in great content anywhere – even offline. Read or listen without distraction, on any device.</p>
                        </div>
                    </section>
                </div>
                <div className='landing-main-container-4'>
                    <section className="landing-panel-4">
                        <div className="landing-panel-content-4">
                            <h2>Start saving to Rocket.</h2>
                            <button className="signup-btn">Sign up now</button>
                        </div>
                    </section>
                </div>
                <div className='landing-main-container-5'>
                    <section className="landing-panel-5">
                        <div className="landing-panel-content-5">
                            <h2>Fuel your mind anywhere.</h2>
                            <p>Immerse yourself in great content anywhere – even offline. Read or listen without distraction, on any device.</p>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}