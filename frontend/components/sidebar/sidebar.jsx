import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { BsArchiveFill } from 'react-icons/bs';


export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar-nav-container">
                <div className="sidebar-nav-content">
                    <NavLink exact activeClassName="active-sidebar" to='/'>
                        <div className="sidebar-btn list-btn">
                            <TiHome size={20} />
                            My List
                        </div>
                    </NavLink>
                    <NavLink exact activeClassName="active-sidebar" to='/archive'>
                        <div className="sidebar-btn archive-btn">
                            <BsArchiveFill size={15} />
                            Archive
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}
