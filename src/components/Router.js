import jsonp from 'jsonp';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, PhotoList, PhotoView } from 'components';
import { getPhotoID } from 'utils';

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
            'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&format=json';

        jsonp(url, { name: 'jsonFlickrFeed' }, (err, data) => {
            if (err) {
                this.handleApiError(err);
            } else {
                this.handleApiResponse(data);
            }
        });
    };

    getCurrent(id) {
        return (
            this.state.photos.filter(item => id === getPhotoID(item.link))[0] ||
            null
        );
    }

    render() {
        return (
            <div className="container">
                <Header onSearch={this.onSearch} />

            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => {
                        return <PhotoList photos={this.state.photos} />;
                    }}
                />

                <Route
                    path="/photos/:id"
                    component={props => {
                        const current = this.getCurrent(props.match.params.id);

                        return current ? <PhotoView data={current} /> : null;
                    }}
                />
            </Switch>
            </div>
        );
    }
}
