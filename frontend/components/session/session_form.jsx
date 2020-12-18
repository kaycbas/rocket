import React, { Component } from 'react';

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

    componentDidMount() {
        this.props.clearErrors();
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
        if (!this.props.errors || this.props.errors.length === 0) return null;
        return (
            <ul className="session-errors">
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
                <div className="mktg-img"></div>
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
                        <span onClick={() => this.props.demoUser()} className="demo-btn">Demo User</span>
                        {this.props.navLink}
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;