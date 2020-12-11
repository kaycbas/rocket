import React, { Component } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default class LandingFooter extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-panel">
                    <div className="footer-links">
                        <a href="https://blog.getpocket.com/">Blog</a>
                        <a href="https://getpocket.com/about">About</a>
                        <a href="https://getpocket.com/publisher/">Publishers</a>
                        <a href="https://getpocket.com/developer/">Developers</a>
                        <a href="https://getpocket.com/tos">Terms of Service</a>
                        <a href="https://getpocket.com/privacy">Privacy</a>
                        <a href="https://help.getpocket.com/">Support</a>
                        <a href="https://getpocket.com/jobs">Jobs</a>
                    </div>
                    <div className="footer-icons">
                        <a 
                            href="https://github.com/kaycbas"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={30} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/kevin-bastoul/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn size={30} />
                        </a>
                    </div>
                    <div className="footer-copyright">
                        © 2020 Kevin Bastoul
                    </div>
                </div>
            </div>
        )
    }
}