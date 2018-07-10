import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './PhotoViewHeader/PhotoViewHeader';
import Body from './PhotoViewBody/PhotoViewBody';
import Footer from './PhotoViewFooter/PhotoViewFooter';

export default class PhotoView extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        const photo = this.props.data;
        return (
            <article className="photoview">
                <Header photo={photo} />
                <Body photo={photo} />
                <Footer photo={photo} />
            </article>
        );
    }
}
