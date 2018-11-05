import React, { Component } from 'react';
import axios from 'axios';

const withApp = WrappedComponent => class extends Component {
    state = {
      users: [],
      profile: [],
    };

    componentDidMount() {
      axios
        .get('http://jsonplaceholder.typicode.com/users')
        .then(({ data }) => {
          this.setState({ users: data });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getUsers = (id) => {
      axios
        .get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(({ data }) => {
          this.setState({ profile: data });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    render() {
      const { users, profile } = this.state;
      return <WrappedComponent {...this.props} users={users} getUser={this.getUsers} profile={profile} />;
    }
};

export default withApp;
