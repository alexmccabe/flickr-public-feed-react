import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PhotoListContainer } from 'components';
// import LoginForm from 'components';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={PhotoListContainer} />
            </Switch>
        );
    }
}
