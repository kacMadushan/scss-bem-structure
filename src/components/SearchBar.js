import React from 'react';

const SearchBar = (props) => {
    const { text, handleOnChange } = props;
    return (
        <div className="search-bar">
            <input
                className="search-bar__input"
                type="text"
                placeholder="Search User"
                value={text}
                onChange={handleOnChange}
            />
        </div>
    );
};

export default SearchBar;