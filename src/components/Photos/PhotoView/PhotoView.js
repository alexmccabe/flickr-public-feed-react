import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class PhotoView extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        const photo = this.props.data;
        return (
            <article className="photoview">
                <header className="photo-header">
                    <h1 className="photo-title">{photo.title}</h1>

                    <div className="photo-meta">
                        <div className="photo-author">
                            <a
                                href={`https://www.flickr.com/people/${
                                    photo.author_id
                                }/`}
                                target="_blank"
                            >
                                {photo.author}
                            </a>
                        </div>

                        <div className="photo-date">{photo.published}</div>
                    </div>

                    <Link className="back" to="/">
                        Back
                    </Link>
                </header>

                <div className="photo-body">
                    <div className="photo-image-container">
                        <img
                            src={photo.media.m}
                            alt=""
                            className="photo-image"
                        />
                    </div>

                    <div
                        className="photo-description"
                        dangerouslySetInnerHTML={{ __html: photo.description }}
                    />
                </div>

                <footer className="photo-footer">
                    Tags:
                    <ul className="tags-list">
                        {photo.tags.split(' ').map((item, index) => {
                            return (
                                <li className="tag" key={index}>
                                    <a href="" className="tag-link">
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </footer>
            </article>
        );
    }
}
