import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDate, getPhotoUser } from 'utils';

import styles from './photo-view-header.module.scss';

export default class PhotoViewHeader extends Component {
    static propTypes = {
        photo: PropTypes.object.isRequired
    };

    render() {
        return (
            <header className={styles.header}>
                <Link
                    className={['no-hover-effect', styles.backButton].join(' ')}
                    to="/"
                >
                    Back
                </Link>

                <h1 className={styles.title}>{this.props.photo.title}</h1>

                <div className={styles.meta}>
                    <div className={[styles.metaItem, styles.author].join(' ')}>
                        <a
                            href={`https://www.flickr.com/people/${
                                this.props.photo.author_id
                            }/`}
                            target="_blank"
                        >
                            {getPhotoUser(this.props.photo.author)}
                        </a>
                    </div>

                    <div className={[styles.metaItem, styles.author].join(' ')}>
                        Published: {formatDate(this.props.photo.published)}
                    </div>
                </div>
            </header>
        );
    }
}
