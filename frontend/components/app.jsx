import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Landing from './landing/landing';
import ArticleShowContainer from './articles/article_show_container';
import MainContainer from './main/main_container';

const App = () => (
    <React.Fragment>
        <AuthRoute path='/home' component={Landing} />
        <Switch>
            <ProtectedRoute exact path='/read/:article_id' component={ArticleShowContainer} />
            <ProtectedRoute path='/' component={MainContainer} />
        </Switch>
    </React.Fragment>
);

export default App;