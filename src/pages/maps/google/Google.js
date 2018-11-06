import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, Polyline } from 'react-google-maps';

import Widget from '../../../components/Widget';
// import { startListeningCoordenates } from '../../../actions/sales';

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
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{
        lat: parseFloat(-12.120754), // parseFloat(props.lat),
        lng: parseFloat(-77.003632), // parseFloat(props.lng),
      }}
    >
      <Polyline
        path={props.coord}
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
  constructor() {
    super();
    this.state = { coord: [] };
  }
  componentDidMount() {
    let n = 0;

    setInterval(() => {
      if (n < 12) {
        this.setState(prevState => ({
          coord: prevState.coord.concat(pathCoordinates[n]),
        }));
        n += 1;
      }
    }, 3000);
  }
  render() {
    const lat = localStorage.getItem('lat');
    const lng = localStorage.getItem('lng');
    const coord = this.state.coord;
    return (
      <div>
        <div className={s.MapContainer}>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <Widget
                title={
                  <h6>
                    {' '}
                    Info <span className="fw-semi-bold">visita</span>
                  </h6>
                }
              >
                <Row>
                  <Col md={3} sm={6} xs={12}>
                    <label htmlFor="companyName">Nombre del Vendedor:</label>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    {' '}
                    <label htmlFor="companyName">Estado de la visita:</label>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    {' '}
                    <label htmlFor="companyName">Duración del trayecto:</label>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={6} xs={12}>
                    <span>Miguel Alfaro</span>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    <span>En progreso</span>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    <span>45 min</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={6} xs={12}>
                    <label htmlFor="companyName">Razón Social del cliente:</label>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    {' '}
                    <label htmlFor="companyName">Fecha y hora inicial:</label>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    {' '}
                    <label htmlFor="companyName">Fecha y hora final:</label>
                  </Col>
                </Row>

                <Row>
                  <Col md={3} sm={6} xs={12}>
                    <span>Oriflame</span>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    <span>10/11/2015 10:25 am</span>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    <span />
                  </Col>
                </Row>
              </Widget>
            </Col>
          </Row>
          <BasicMap
            lat={lat}
            lng={lng}
            coord={coord}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
            loadingElement={<div style={{ height: 'inherit', width: 'inherit' }} />}
            containerElement={<div style={{ height: 'inherit' }} />}
            mapElement={<div style={{ height: 'inherit' }} />}
          />
          <Row>
            <Col md={12} sm={12} xs={12}>
              <Widget>
                <Row>
                  <Col md={3} sm={6} xs={12}>
                    <label htmlFor="companyName">Dirección de la partida:</label>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <label htmlFor="companyName">Dirección del cliente:</label>
                  </Col>
                  <Col md={6} sm={6} xs={12}>
                    <Link to="/app/sales/main">
                      <Button color="default" className="width-100 mb-xs mr-xs">
                        Retornar
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={6} xs={12}>
                    <span>Av Bernardo Alcedo 1203</span>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <span>Av Camino real 221 int 102</span>
                  </Col>
                  <Col md={6} sm={6} xs={12}>
                    <span />
                  </Col>
                </Row>
              </Widget>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Maps.propTypes = {
  lat: PropTypes.any.isRequired,
  lng: PropTypes.any.isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   startListeningCoordenates: visitId => dispatch(startListeningCoordenates(visitId)),
// });

// const mapStateToProps = state => ({
//   auth: state.messages,
// });

export default withStyles(s)(Maps);
