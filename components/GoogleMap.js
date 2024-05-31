import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 53.479,
      lng: -2.246
    },
    zoom: 9
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_ACCESS_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
