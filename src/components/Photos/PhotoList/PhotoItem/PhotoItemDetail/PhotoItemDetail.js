import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { formatDate, getPhotoID, getPhotoUser } from 'utils';
import { SvgIcons } from 'components';

import styles from './photo-item-detail.module.scss';
export default class PhotoItemDetail extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        hovered: PropTypes.bool
    };

    render() {
        const photo = this.props.data;
        const id = getPhotoID(photo.link);

        return (
            <div
                className={[
                    styles.details,
                    this.props.hovered ? styles.parentHovered : null
                ].join(' ')}
            >
                <header className={styles.header}>
                    <h2 className={styles.title}>
                        <Link to={`/photos/${id}`}>{photo.title}</Link>
                    </h2>
                </header>

                <div className={styles.meta}>
                    <div className={[styles.date, styles.metaItem].join(' ')}>
                        <SvgIcons
                            name="clock"
                            className={[styles.icon, styles.iconDate].join(' ')}
                        />
                        <span className={styles.dateLabel}>Published: </span>{formatDate(photo.published)}
                    </div>
                    <div className={[styles.author, styles.metaItem].join(' ')}>
                        <a
                            href={`https://www.flickr.com/people/${
                                photo.author_id
                            }/`}
                            target="_blank"
                            className="button button--small"
                        >
                            <SvgIcons
                                name="user"
                                className={[
                                    styles.icon,
                                    styles.iconAuthor
                                ].join(' ')}
                            />
                            {getPhotoUser(photo.author)}
                        </a>
                    </div>

                    <div
                        className={[styles.flickrLink, styles.metaItem].join(
                            ' '
                        )}
                    >
                        <a
                            href={photo.link}
                            target="_blank"
                            className="button button--small"
                        >
                            <SvgIcons
                                name="flickr"
                                className={[
                                    styles.icon,
                                    styles.iconFlickr
                                ].join(' ')}
                            />
                            View on Flickr
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
