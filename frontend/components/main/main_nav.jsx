import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';

export default class MainNav extends Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.state = { dropdown: 'collapsed' }
    }

    toggleDropdown(e) {
        if (e.currentTarget.classList.contains("dropped")) {
            e.currentTarget.classList.remove("dropped");
        } else {
            e.currentTarget.classList.add("dropped");
        }
    }

    render() {
        return (
            <header className="nav-container">
                <nav className="nav-content">
                    <Link to='/' className="nav-logo">
                        <img className="nav-logo" src={window.rocketLogo} alt="Rocket logo" />
                    </Link>
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
                        <div className="nav-util">
                            <GrAdd size={22} />
                        </div>
                        <div onClick={this.toggleDropdown} className="nav-util" >
                            <CgProfile size={22} />
                            <div className='profile-modal'>
                                <div className="modal-line profile-hide-reset">
                                    <p>Reset Hides</p>
                                </div>
                                <div className="modal-line profile-signout">
                                    <p>Sign Out</p>
                                </div>
                                <span className="profile-hover-soln"></span>
                            </div>
                        </div>
                    </ul>
                </nav>
            </header>
        )
    }
}
