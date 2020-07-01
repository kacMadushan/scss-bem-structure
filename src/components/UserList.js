import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from './UserListItem';

const UserList = (props) => {
    const { users, loading } = props;
    let showUser = null;
    const userItem = users.map((user, index) => <UserListItem count={index} key={user.id} {...user} />);
    showUser = loading ? <p>Loading...</p> : userItem;
    return (
        <div className="user-list">{showUser}</div>
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
    loading: PropTypes.bool.isRequired,
};

export default UserList;