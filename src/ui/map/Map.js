import React, { Component } from 'react';
import { Box } from 'grid-styled'
import GoogleMapReact from 'google-map-react';
 
class Map extends Component {
  constructor() {
    super();
    this.state={
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    }
  }

  render() {
    return (
      <Box css={{ height: '400px', width: '671px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAqXvSbIja_dqnW6cVIV2dDyQepMAM8JPA' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        />
      </Box>
    );
  }
}
 
export default Map;
