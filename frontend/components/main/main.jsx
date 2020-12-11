import React, { Component } from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';
import MainNavContainer from './main_nav_container';
import SidebarContainer from '../sidebar/sidebar_container';
import MyListIndexContainer from '../articles/my_list_index_container';
import DiscoverIndexContainer from '../articles/discover_index_container';


export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
            
                <MainNavContainer />
                <main className="main-container">
                    <SidebarContainer />
                    <Route exact path='/' component={MyListIndexContainer} />
                    <Route exact path='/discover' component={DiscoverIndexContainer} />
                </main>
            </React.Fragment>
        )
    }
}
