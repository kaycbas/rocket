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

    renderEmailField() {
        if (this.props.formType === 'Sign In') return null;
        return (
            <React.Fragment>
                <label>Email:
                    <input type="email"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                </label>
                <br />
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <br />
                    {this.renderErrors()}
                    <br />
                    <label>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <br />
                    {this.renderEmailField()}
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <br />
                    <input type="submit" value={this.props.formType} />
                </form>
                {this.props.navLink}
            </div>
        );
    }
}

export default SessionForm;