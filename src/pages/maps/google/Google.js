import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, Polyline } from 'react-google-maps';

import s from './Google.scss';

const pathCoordinates = [
  { lat: -12.120754, lng: -77.003632 },
  { lat: -12.120816, lng: -77.00376 },
  { lat: -12.120649, lng: -77.003535 },
  { lat: -12.120617, lng: -77.003278 },
  { lat: -12.120565, lng: -77.003009 },
  { lat: -12.120575, lng: -77.002913 },
  { lat: -12.120397, lng: -77.001733 },
  { lat: -12.12024, lng: -77.00022 },
  { lat: -12.120019, lng: -76.999126 },
  { lat: -12.119893, lng: -76.997924 },
  { lat: -12.119851, lng: -76.997634 },
  { lat: -12.117732, lng: -76.996647 },
];
const BasicMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{
        lat: parseFloat(-12.120754), // parseFloat(props.lat),
        lng: parseFloat(-77.003632), // parseFloat(props.lng),
      }}
    >
      <Polyline
        path={pathCoordinates}
        geodesic
        options={{
          strokeColor: '#ff2527',
          strokeOpacity: 0.75,
          strokeWeight: 2,
        }}
      />
      <Marker position={{ lat: parseFloat(-12.120754), lng: parseFloat(-77.003632) }} />
    </GoogleMap>
  )),
);

class Maps extends React.Component {
  render() {
    const lat = localStorage.getItem('lat');
    const lng = localStorage.getItem('lng');
    return (
      <div>
        <h1 className={`${s.MapTitle} page-title`}>
          Google <span className="fw-semi-bold">Maps</span>
        </h1>
        <div className={s.MapContainer}>
          <BasicMap
            lat={lat}
            lng={lng}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
            loadingElement={<div style={{ height: 'inherit', width: 'inherit' }} />}
            containerElement={<div style={{ height: 'inherit' }} />}
            mapElement={<div style={{ height: 'inherit' }} />}
          />
        </div>
      </div>
    );
  }
}

Maps.propTypes = {
  lat: PropTypes.any.isRequired,
  lng: PropTypes.any.isRequired,
};

export default withStyles(s)(Maps);
