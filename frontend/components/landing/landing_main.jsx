import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';

export default class LandingMain extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='landing-main-container'>
                    <div className='darken'>
                        <section className="landing-panel">
                            <div className="landing-panel-content">
                                <h2>Knowledge is rocket fuel.</h2>
                                <Link to='/home/signup'>
                                    <button className="btn google">
                                        <span>
                                            Sign up for Rocket
                                        </span>
                                    </button>
                                </Link>
                                <Link to='/home/signin'>
                                    <button className="btn email">Log in to Rocket</button>
                                </Link>
                                <span className="signin">
                                    <p>Already have an account?</p>
                                    <Link className="link" to='/home/signin'>Log In</Link> &gt;
                                </span>
                                <p className="terms">
                                    By signing up, you agree to Rocket’s Terms of Service and Privacy Policy.
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
                            <Link to='/home/signup'>
                                <button className="signup-btn">Sign up now</button>
                            </Link>
                        </div>
                    </section>
                </div>
                <div className='landing-main-container-5'>
                    <section className="landing-panel-grid">
                        <div className="app-store">
                            <a href="https://apps.apple.com/us/app/pocket-save-read-grow/id309601447">
                                <span className="apple-store"></span>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.ideashower.readitlater.pro&hl=en_US&gl=US">
                                <span className="google-store"></span>
                            </a>
                        </div>
                        <div className="testimony">
                            <h2 className="twitter-quote">“It’s revolutionised the way I read industry news on the go. I'm in love”</h2>
                            <span className="cite">
                                <FaTwitter size={25} />
                                <p>@elliebudd_</p>
                            </span>
                        </div>
                        <div className="award">
                            <h1>10X</h1>
                            <h3>Webby Award Winner</h3>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}