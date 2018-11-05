import React, { Component } from 'react';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';
import axios from 'axios';

class User extends Component {
    state = {
      profile: {},
      lat: '',
      lng: '',
    }

    componentDidMount() {
      const { id } = this.props.match.params;
      axios
        .get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(({ data }) => {
          this.setState({
            profile: data,
            lat: data.address.geo.lat,
            lng: data.address.geo.lng,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    render() {
      const {
        profile, lat, lng,
      } = this.state;
      const { 
        address, name, username, phone, website, email 
      } = profile;
      console.log(address)
      const latitude = parseFloat(lat);
      const longitude = parseFloat(lng);
      const MyMap = withScriptjs(withGoogleMap(props => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: latitude, lng: longitude }}
        >
          {props.isMarkerShown && <Marker position={{ lat: latitude, lng: longitude }} />}
        </GoogleMap>
      )));
      return (
        <React.Fragment>
          <h3>
            Profile
          </h3>
          <p>
            Name: {name}
          </p>
          <p>
            Username: {username}
          </p>
          <p>
            Phone Number: {phone}
          </p>
          <p>
            Website: {website}
          </p>
          <p>
            Email: {email}
          </p>
          <h3>
            Location
          </h3>
          <MyMap
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6yJ7w_f4FqNbn7lfjF3zaaEHCrGlmQ5I&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px`, marginBottom:`10px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
          />
        </React.Fragment>
      );
    }
}


export default User;
