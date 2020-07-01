import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            loading: false,
            searchText: ''
        }
    };

    handleOnChange = e => {
        const searchText = e.target.value;
        this.setState({ searchText })
    };

    getAllUsers = () => {
        this.setState({ loading: true });
        const baseUrl = './users.json';
        fetch(baseUrl)
            .then(response => response.json())
            .then(users => this.setState({ users, loading: false }))
    };

    componentDidMount() {
        this.getAllUsers();
    };

    render() {
        const { users, loading, searchText } = this.state;
        const subTitle = 'This is a Best Tweet Users';
        const searchByUsers = users
            .filter(
                (user) => searchText ? user.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 : user
            );
        return (
            <div className="container">
                <Header subTitle={subTitle} />
                <SearchBar
                    text={searchText}
                    handleOnChange={this.handleOnChange}
                />
                <UserList
                    loading={loading}
                    users={searchByUsers}
                />
            </div>
        );
    }
};

export default App;