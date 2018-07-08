import React, { Component } from 'react';
import PhotoList from 'components/Photos/PhotoList/PhotoList';

import jsonp from 'jsonp';

export default class PhotoListContainer extends Component {
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
        return <PhotoList photos={this.state.photos} />;
    }
}
