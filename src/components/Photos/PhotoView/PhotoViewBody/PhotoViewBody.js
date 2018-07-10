import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './photo-view-body.module.scss';

export default class PhotoViewFooter extends Component {
    static propTypes = {
        photo: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className={styles.body}>
                <div className={styles.imageContainer}>
                    <img
                        src={this.props.photo.media.m}
                        alt=""
                        className={styles.image}
                    />
                </div>

                <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                        __html: this.props.photo.description
                    }}
                />
            </div>
        );
    }
}
