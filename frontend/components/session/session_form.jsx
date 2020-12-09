import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    renderFormHeader() {
        if (this.props.formType === 'Sign In') {
            return (
                <h3 className='signin-h3'>Log In</h3>
            )
        } else {
            return (
                <h3 className='signup-h3'>Sign Up</h3>
            )
        }
    }

    renderEmailField() {
        if (this.props.formType === 'Sign In') return null;
        return (
            <React.Fragment>
                <input type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.update('email')}
                />
            </React.Fragment>
        );
    }

    renderMktgContent() {
        if (this.props.formType === 'Sign In') {
            return (
                <div className="mac-img"></div>
            )
        } else {
            return (
                <h1>Sign Up Marketing Content</h1>
            )
        }
    }

    render() {
        return (
            <div className="session-container">
                <div className="session-content">
                    <div className="session-mktg">
                        {this.renderMktgContent()}
                    </div>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        {this.renderFormHeader()}
                        {this.renderErrors()}
                        <input type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                        {this.renderEmailField()}
                        <input type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                        <span className="submit-btn">
                            <input type="submit" value={this.props.formType} />
                        </span>
                        {this.props.navLink}
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;