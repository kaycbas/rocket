import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { BsArchiveFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai'
import { AiFillTag } from 'react-icons/ai'


export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { mode: 'default-mode' }
        this.toggleMode = this.toggleMode.bind(this);
    }

    toggleMode() {
        if (this.state.mode === 'default-mode') {
            this.setState({ mode: 'tag-mode' })
        } else {
            this.setState({ mode: 'default-mode' })
        }
    }  

    renderTags() {

    }

    render() {
        return (
            <div className="sidebar-nav-container">
                <div className={`sidebar-nav-content ${this.state.mode}`}>
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
                    <div className="filter-label">Filters</div>
                    <NavLink exact activeClassName="active-sidebar" to='/favorites'>
                        <div className="sidebar-btn favorite-btn">
                            <AiFillStar size={21} />
                            Favorites
                        </div>
                    </NavLink>
                    <div className="sidebar-btn tag-btn">
                        <AiFillTag size={21} />
                        Tags
                    </div>
                </div>
            </div>
        )
    }
}
