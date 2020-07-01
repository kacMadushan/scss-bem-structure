import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Follow from './Follow';

const UserListItem = (props) => {
    const {
        name,
        job,
        avatarUrl,
        link,
        joined,
        following,
        followers
    } = props;
    return (
        <div className="user-item">
            <Avatar styleClass="user-item__avatar" url={avatarUrl} name={name} />
            <h3 className="user-item__name">{name}</h3>
            <p className="user-item__job">{job}</p>
            <a className="user-item__link">{link}</a>
            <span className="user-item__joined"><strong>Joined</strong> {joined}</span>
            <Follow styleClass="user-item__follow" label="Following" count={following} />
            <Follow styleClass="user-item__follow" label="Followers" count={followers} />
        </div>
    );
};

UserListItem.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    joined: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
}

export default UserListItem;