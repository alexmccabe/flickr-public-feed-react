import React, { Component } from 'react';
import PhotoList from 'components/Photos/PhotoList/PhotoList';

export default class PhotoListContainer extends Component {
    state = {
        photos: []
    };

    getData = () => {};

    render() {
        console.log(this.props);
        return <PhotoList photos={this.state.photos} />;
    }
}
