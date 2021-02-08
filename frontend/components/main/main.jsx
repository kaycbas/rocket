import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomeModalContainer from '../welcome/welcome_modal_container';
// import WelcomeModal from '../welcome/welcome_modal';
import MainNavContainer from './main_nav_container';
import SidebarContainer from '../sidebar/sidebar_container';
import MyListIndexContainer from '../articles/my_list_index_container';
import DiscoverIndexContainer from '../articles/discover_index_container';
import ArchiveIndexContainer from '../articles/archive_index_container';
import FavoritesIndexContainer from '../articles/favorites_index_container';
import TagsIndexContainer from '../articles/tags_index_container';
import Error from '../error/error';


export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    renderWelcomeModal() {
        if (!this.props.modal) return null;
        return (<WelcomeModalContainer />)
        // return (<WelcomeModal />)
    }

    render() {
        return (
            <React.Fragment>
                <MainNavContainer />
                {this.renderWelcomeModal()}
                <main className="main-container" id="main">
                    <SidebarContainer />
                    <Switch>
                        <Route exact path='/' component={MyListIndexContainer} />
                        <Route exact path='/discover' component={DiscoverIndexContainer} />
                        <Route exact path='/archive' component={ArchiveIndexContainer} />
                        <Route exact path='/favorites' component={FavoritesIndexContainer} />
                        <Route exact path='/tags/:label' component={TagsIndexContainer} />
                        <Route component={Error} />
                    </Switch>
                </main>
            </React.Fragment>
        )
    }
}
