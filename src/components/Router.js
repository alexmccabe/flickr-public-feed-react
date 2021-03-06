import jsonp from 'jsonp';
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, PhotoList, PhotoView } from 'components';
import { getPhotoID } from 'utils';

class Router extends Component {
    static propTypes = {
        history: PropTypes.object
    };

    state = {
        photos: []
    };

    componentWillMount() {
        this.getData();
    }

    handleApiResponse = data => {
        this.setState({
            photos: data.items
        });
    };

    handleApiError = err => {
        console.log(err);
    };

    onSearch = data => {
        if (data.data.searchTerm && data.data.searchTerm.length) {
            this.getData(data.data.searchTerm);
        } else {
            this.getData();
        }

        this.props.history.push('/');
    };

    getData = (searchTerm = 'potato') => {
        const baseUrl =
            'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

        const url = `${baseUrl}&tags=${searchTerm}`;

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
                            const current = this.getCurrent(
                                props.match.params.id
                            );

                            return current ? (
                                <PhotoView data={current} />
                            ) : (
                                <p>
                                    Invalid photo selected, try searching for a
                                    new one!
                                </p>
                            );
                        }}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Router);
