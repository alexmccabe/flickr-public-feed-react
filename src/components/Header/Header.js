import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Search } from 'components';

import styles from './header.module.scss';

export default class Header extends Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired
    };

    render() {
        return (
            <header className={styles.header}>
                <h1 className={styles.title}>Flickr Public Feed</h1>

                <Search onSubmit={this.props.onSearch} />
            </header>
        );
    }
}
