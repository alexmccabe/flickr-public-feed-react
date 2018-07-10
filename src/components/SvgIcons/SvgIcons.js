import React from 'react';
import PropTypes from 'prop-types';
import styles from './svgicons.module.scss';
import spritesheet from './spritesheet.svg';

export default function SvgIcons(props) {
    function getContainerClasses() {
        return [
            props.className ? props.className : null,
            'icon-container'
        ].filter(item => item);
    }

    return (
        <div className={getContainerClasses()}>
            <svg
                className={[styles.icon, styles[`icon-${props.name}`]].join(
                    ' '
                )}
            >
                <use xlinkHref={`${spritesheet}#icon-${props.name}`} />
            </svg>
        </div>
    );
}

SvgIcons.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired
};
