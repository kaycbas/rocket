import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { $CombinedState } from 'redux';

export default class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = { addUrl: false }
        this.resetHides = this.resetHides.bind(this);
        this.signOut = this.signOut.bind(this);
        this.renderDefaultNav = this.renderDefaultNav.bind(this);
        this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
        this.toggleAddUrl = this.toggleAddUrl.bind(this);
    }

    resetHides() {
        this.props.deleteHides()
            .then(this.props.fetchArticles(this.props.articles[0].filter))
    }

    signOut() {
        this.props.signOut();
    }

    toggleAddUrl() {
        this.setState({ addUrl: !this.state.addUrl })
    }   

    handleUrlSubmit() {
        const input = document.getElementById('url-input');
        const url = input.value;
        // fetch(url, { mode: 'no-cors'})
        //     .then(res => {
        //         debugger;
        //         return res.text();
        //     }).then(text => {
        //         debugger;
        //     })
        $.get(url, res => {
            debugger;
        })
    }

    renderDefaultNav() {
        if (this.state.addUrl) return null;
        return (
            <React.Fragment>
                <ul className="nav-tabs">
                    <div className="tab-container">
                        <NavLink exact activeClassName="active-tab" to='/'>
                            Home
                        </NavLink>
                    </div>
                    <div className="tab-container">
                        <NavLink exact activeClassName="active-tab" to='/discover'>
                            Discover
                        </NavLink>
                    </div>
                </ul>
                <ul className="nav-utils">
                    <div className="nav-util">
                        <BsSearch size={22} />
                    </div>
                    <div onClick={this.toggleAddUrl} className="nav-util">
                        <GrAdd size={22} />
                    </div>
                    <div className="nav-util" >
                        <CgProfile size={22} />
                        <div className='profile-modal'>
                            <div onClick={this.resetHides} className="modal-line profile-hide-reset">
                                <p>Reset Hides</p>
                            </div>
                            <div onClick={this.signOut} className="modal-line profile-signout">
                                <p>Sign Out</p>
                            </div>
                            <span className="profile-hover-soln"></span>
                        </div>
                    </div>
                </ul>
            </React.Fragment>
        )
    }

    renderAddField() {
        if (!this.state.addUrl) return null;
        return (
            <React.Fragment>
                <div className="url-add-container">
                    <form className="url-add-form" onSubmit={this.handleSubmit}>
                        <input
                            id="url-input"
                            type="url"
                            placeholder="Save a URL https://..."
                            pattern="https://.*"
                            value={this.state.url}
                            onChange={this.updateUrl}
                            required
                        />
                    </form>
                </div>
                <div className="url-submit-container">
                    <button onClick={this.toggleAddUrl}>Cancel</button>
                    <button onClick={this.handleUrlSubmit}>Save</button>
                </div>
            </React.Fragment>
        )
    }

    render() {
        return (
            <header className="nav-container">
                <nav className="nav-content">
                    <Link to='/' className="nav-logo">
                        <img className="nav-logo" src={window.rocketLogo} alt="Rocket logo" />
                    </Link>
                    {this.renderDefaultNav()}
                    {this.renderAddField()}
                </nav>
            </header>
        )
    }
}
