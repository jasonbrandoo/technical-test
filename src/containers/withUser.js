import React, { Component } from 'react';
import axios from 'axios';

const withUser = WrappedComponent => class extends Component {
    state = {
      profile: [],
    };

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
      const { profile } = this.state;
      return <WrappedComponent {...this.props} getUser={this.getUsers} profile={profile} />;
    }
};

export default withUser;
