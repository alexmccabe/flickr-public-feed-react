import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './photo-item-image.module.scss';

export default class PhotoItemImage extends Component {
    static propTypes = {
        alt: PropTypes.string,
        imageUri: PropTypes.string.isRequired,
        internalLinkUrl: PropTypes.string
    };

    renderImage() {
        const inlineStyles = {
            backgroundImage: `url(${this.props.imageUri})`
        };

        return (
            <div className={styles.imageContainer}>
                <div
                    className={styles.image}
                    title={this.props.alt}
                    style={inlineStyles}
                />
            </div>
        );
    }

    render() {
        return this.props.internalLinkUrl ? (
            <Link to={this.props.internalLinkUrl} className={styles.imageLink}>
                {this.renderImage()}
            </Link>
        ) : (
            this.renderImage()
        );
    }
}
