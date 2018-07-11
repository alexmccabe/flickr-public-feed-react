import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './photo-view-body.module.scss';

export default class PhotoViewFooter extends Component {
    static propTypes = {
        photo: PropTypes.object.isRequired
    };

    getContentParagraphs = content => {
        const matches = [];

        content.replace(/<p>(.*?)<\/p>/g, function () {
            matches.push(arguments[1]);
        });

        return matches;
    };

    render() {
        const paragraphs = this.getContentParagraphs(
            this.props.photo.description
        );

        return (
            <div className={styles.body}>
                <div className={styles.imageContainer}>
                    <img
                        src={this.props.photo.media.m}
                        alt=""
                        className={['image', styles.image].join(' ')}
                    />
                </div>

                <div className={styles.description}>
                    {paragraphs.length === 3 ? (
                        <p>paragraphs[2]</p>
                    ) : (
                        <em>No description provided</em>
                    )}
                </div>
            </div>
        );
    }
}
