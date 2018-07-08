import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class PhotoImage extends Component {
    static propTypes = {
        alt: PropTypes.string,
        imageUri: PropTypes.string.isRequired,
        internalLinkUrl: PropTypes.string
    };

    render() {
        return this.props.internalLinkUrl ? (
            <Link to={this.props.internalLinkUrl}>
                <img src={this.props.imageUri} alt={this.props.alt} />
            </Link>
        ) : (
            <img src={this.props.imageUri} alt={this.props.alt} />
        );
    }
}
