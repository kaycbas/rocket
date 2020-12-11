import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// Components
import Landing from './landing/landing';
import ArticleShowContainer from './articles/article_show_container';
import MainContainer from './main/main_container';
import Error from './error/error';

const App = () => (
    <React.Fragment>
        <AuthRoute path='/' component={Landing} />
        <Switch>
            <ProtectedRoute exact path='/read/:article_id' component={ArticleShowContainer} />
            <ProtectedRoute path='/' component={MainContainer} />
        </Switch>
    </React.Fragment>
);

export default App;