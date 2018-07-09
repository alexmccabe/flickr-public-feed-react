import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoItem from './PhotoItem/PhotoItem';

import { getPhotoID } from 'utils';

export default class PhotoList extends Component {
    static defaultProps = {};

    static propTypes = {
        photos: PropTypes.array.isRequired
    };

    state = {};

    renderList = () => {
        return this.props.photos && this.props.photos.length
            ? this.props.photos.map(photo => {
                const id = getPhotoID(photo.link);

                return <PhotoItem key={id} data={photo} id={id} />;
            })
            : null;
    };

    render() {
        return <div className="photolist">{this.renderList()}</div>;
    }
}
