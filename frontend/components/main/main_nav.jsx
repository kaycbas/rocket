import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';

export default class MainNav extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.signOut();
    }

    render() {
        return (
            <header className="nav-container">
                <nav className="nav-content">
                    <Link to='/' className="nav-logo">
                        <img className="nav-logo" src={window.rocketLogo} alt="Rocket logo" />
                    </Link>
                    <ul className="nav-tabs">
                        <Link to='/' className="nav-tab">
                            <label>Home</label>
                        </Link>
                        <Link to='/discover' className="nav-tab">
                            <label>Discover</label>
                        </Link>
                    </ul>
                    <ul className="nav-utils">
                        <div className="nav-util">
                            <BsSearch size={22} />
                        </div>
                        <div className="nav-util">
                            <GrAdd size={22} />
                        </div>
                        <div className="nav-util" onClick={this.handleClick} >
                            <CgProfile size={22} />
                        </div>
                    </ul>
                </nav>
            </header>
        )
    }
}
