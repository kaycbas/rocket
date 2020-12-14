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
import ArchiveIndexContainer from '../articles/archive_index_container';
import Error from '../error/error';


export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <MainNavContainer />
                <main className="main-container">
                    <SidebarContainer />
                    <Switch>
                        <Route exact path='/' component={MyListIndexContainer} />
                        <Route exact path='/discover' component={DiscoverIndexContainer} />
                        <Route exact path='/archive' component={ArchiveIndexContainer} />
                        <Route exact path='/favorites' component={FavoritesIndexContainer} />
                        <Route component={Error} />
                    </Switch>
                </main>
            </React.Fragment>
        )
    }
}
