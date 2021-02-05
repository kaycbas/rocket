import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GrAdd } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { FaMap } from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { BsArchiveFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

export default class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = { addUrl: false, mode: 'default-mode' }
        this.resetHides = this.resetHides.bind(this);
        this.signOut = this.signOut.bind(this);
        this.renderDefaultNav = this.renderDefaultNav.bind(this);
        this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
        this.toggleAddUrl = this.toggleAddUrl.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
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

    toggleMode() {
        if (this.state.mode === 'default-mode') {
            this.setState({ mode: 'mobile-mode' })
        } else {
            this.setState({ mode: 'default-mode' })
        }
    }   

    handleUrlSubmit() {
        const input = document.getElementById('url-input');
        const url = input.value;
        this.props.createArticle(url);
        this.toggleAddUrl();
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
                    <div onClick={this.toggleAddUrl} className="nav-util url-add">
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

    renderMobileSidebar() {
        return (
            <div className={`mobile-sidebar ${this.state.mode}`}>
                <ul className="mobile-tabs">
                    <NavLink exact activeClassName="active-mobile" className="mobile-tab" to='/discover'>
                        <FaMap size={20} />
                        Discover
                    </NavLink>
                    <NavLink exact activeClassName="active-mobile" className="mobile-tab" to='/'>
                        <TiHome size={20} />
                        My List
                    </NavLink>
                    <NavLink exact activeClassName="active-mobile" className="mobile-tab" to='/archive'>
                        <BsArchiveFill size={20} />
                        Archive
                    </NavLink>
                    <NavLink exact activeClassName="active-mobile" className="mobile-tab" to='/favorites'>
                        <AiFillStar size={21} />
                        Favorites
                    </NavLink>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <header className="nav-container">
                    {this.renderMobileSidebar()}
                    <nav className="nav-content">
                        <div className="hamburger-wrapper">
                            <div onClick={this.toggleMode} className="mobile-hamburger">
                                <GiHamburgerMenu size={20}/>
                            </div>
                            <Link to='/' className="nav-logo">
                                <img className="nav-logo" src={window.rocketLogo} alt="Rocket logo" />
                            </Link>
                        </div>
                        {this.renderDefaultNav()}
                        {this.renderAddField()}
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}
