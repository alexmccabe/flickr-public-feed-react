import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PhotoImage from './PhotoImage/PhotoImage';
import PhotoDetail from './PhotoDetail/PhotoDetail';

export default class PhotoItem extends Component {
    static defaultProps = {};

    static propTypes = {
        data: PropTypes.object.isRequired,
        id: PropTypes.any.isRequired
    };

    state = {};

    getAltText = photo => {
        return `${photo.title} by ${photo.author}`;
    };

    render() {
        const photo = this.props.data;

        return (
            <div className="photo-item">
                <PhotoImage
                    alt={this.getAltText(photo)}
                    internalLinkUrl={`/photos/${this.props.id}`}
                    imageUri={photo.media.m}
                />
                <PhotoDetail data={photo} />
            </div>
        );
    }
}
