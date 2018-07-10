import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './search.module.scss';

export default class Search extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    state = {
        searchTerm: ''
    };

    onSubmit = event => {
        event.preventDefault();

        this.props.onSubmit({
            data: {
                searchTerm: this.state.searchTerm
            }
        });
    };

    onChange = event => {
        const target = event.currentTarget;
        const value = target.value;

        this.setState({
            searchTerm: value
        });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className={styles.form}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className={styles.searchBox}
                    onChange={this.onChange}
                    value={this.state.searchTerm}
                />

                <button type="submit" className={styles.submitButton}>
                    Search
                </button>
            </form>
        );
    }
}
