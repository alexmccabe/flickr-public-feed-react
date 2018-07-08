import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PhotoListContainer, PhotoView } from 'components';
// import LoginForm from 'components';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={PhotoListContainer} />
                <Route path="/photos/:id" component={PhotoView} />
            </Switch>
        );
    }
}
