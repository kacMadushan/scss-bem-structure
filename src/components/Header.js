import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { title, subTitle } = props;
    return (
        <div className="header">
            <h1 className="header__title">{title}</h1>
            <p className="header__subtitle">{subTitle}</p>
        </div>
    );
};

Header.defaultProps = {
    title: 'Twitter Following Users'
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

export default Header;