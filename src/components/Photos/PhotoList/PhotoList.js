import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PhotoList extends Component {
    static defaultProps = {};

    static propTypes = {
        photos: PropTypes.array.isRequired
    };

    state = {};

    render() {
        return (
            <div className="photolist">
                {this.props.photos
                    ? this.props.photos.map((photo, index) => {
                        return <div key={index} />;
                    })
                    : null}
            </div>
        );
    }
}
