import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './tags.module.scss';

export default class Tags extends Component {
    static defaultProps = {
        label: 'Tags:',
        tags: []
    };

    static propTypes = {
        label: PropTypes.string,
        tags: PropTypes.array.isRequired
    };

    render() {
        return (
            <div className={styles.tags}>
                <div className={styles.tagLabel}>{this.props.label}</div>
                <ul className={styles.tagsList}>
                    {this.props.tags.map((item, index) => {
                        return (
                            <li className={styles.tag} key={index}>
                                <a
                                    href={`https://www.flickr.com/photos/tags/${item.toLowerCase()}`}
                                    className={[
                                        'no-hover-effect',
                                        styles.tagLink
                                    ].join(' ')}
                                    target="_blank"
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
