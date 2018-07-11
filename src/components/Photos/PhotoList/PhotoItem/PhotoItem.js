import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PhotoImage from './PhotoItemImage/PhotoItemImage';
import PhotoDetail from './PhotoItemDetail/PhotoItemDetail';

import styles from './photo-item.module.scss';

export default class PhotoItem extends Component {
    static defaultProps = {};

    static propTypes = {
        data: PropTypes.object.isRequired,
        id: PropTypes.any.isRequired
    };

    state = {
        hovered: false
    };

    getAltText = photo => {
        return `${photo.title} by ${photo.author}`;
    };

    render() {
        const photo = this.props.data;

        return (
            <div
                className={styles.photoItem}
                onMouseEnter={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
            >
                <PhotoImage
                    alt={this.getAltText(photo)}
                    internalLinkUrl={`/photos/${this.props.id}`}
                    imageUri={photo.media.m}
                />
                <PhotoDetail data={photo} hovered={this.state.hovered} />
            </div>
        );
    }
}
