import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => {
    const { styleClass, url, name } = props;
    return (
        <img
            className={styleClass}
            src={url}
            alt={name}
        />
    )
};

Avatar.propTypes = {
    styleClass: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Avatar;