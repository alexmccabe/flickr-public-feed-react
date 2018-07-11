import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tags } from 'components';

import styles from './photo-view-footer.module.scss';

export default class PhotoViewHeader extends Component {
    static propTypes = {
        photo: PropTypes.object.isRequired
    };

    render() {
        return (
            <footer className={styles.footer}>
                <Tags tags={this.props.photo.tags.split(' ')} />
            </footer>
        );
    }
}
