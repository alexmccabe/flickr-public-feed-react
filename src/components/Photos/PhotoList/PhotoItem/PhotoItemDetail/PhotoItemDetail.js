import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { formatDate, getPhotoID, getPhotoUser } from 'utils';

export default class PhotoItemDetail extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired
    };

    state = {};

    render() {
        const photo = this.props.data;
        const id = getPhotoID(photo.link);

        return (
            <div className="photo-detail">
                <header className="photo-header">
                    <Link to={`/photos/${id}`}>
                        <h2 className="photo-title">{photo.title}</h2>
                    </Link>
                </header>

                <div className="photo-meta">
                    <div className="photo-date">
                        {formatDate(photo.published)}
                    </div>
                    <div className="photo-author">
                        <a
                            href={`https://www.flickr.com/people/${
                                photo.author_id
                            }/`}
                            target="_blank"
                        >
                            {getPhotoUser(photo.author)}
                        </a>
                    </div>

                    <div className="photo-link">
                        <a href={photo.link} target="_blank">
                            View on Flickr
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
