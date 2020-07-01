import React from 'react';
import PropTypes from 'prop-types';

const Follow = (props) => {
    const { styleClass, count, label } = props;
    return (
        <div className={styleClass}>{count} <strong>{label}</strong></div>
    );
};

Follow.propTypes = {
    styleClass: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
};

export default Follow;