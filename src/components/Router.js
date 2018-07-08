import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PhotoList, PhotoView } from 'components';
import jsonp from 'jsonp';

export default class Router extends Component {
    state = {
        photos: []
    };

    componentWillMount() {
        this.getData();
    }

    handleApiResponse = data => {
        this.setState({
            photos: [...this.state.photos, ...data.items]
        });
    };

    handleApiError = err => {
        console.log(err);
    };

    getData = () => {
        let url =
            'https://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json';

        jsonp(url, { name: 'jsonFlickrFeed' }, (err, data) => {
            if (err) {
                this.handleApiError(err);
            } else {
                this.handleApiResponse(data);
            }
        });
    };

    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => {
                        return <PhotoList photos={this.state.photos} />;
                    }}
                />
                <Route path="/photos/:id" component={PhotoView} />
            </Switch>
        );
    }
}
