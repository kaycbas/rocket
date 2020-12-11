import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='/'>
                        <div className="sidebar-btn list-btn">
                            <TiHome size={20} />
                            My List
                        </div>
                    </Link>
                    <Link to='/archive'>
                        <div className="sidebar-btn archive-btn">
                            <BsArchiveFill size={15} />
                            Archive
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
