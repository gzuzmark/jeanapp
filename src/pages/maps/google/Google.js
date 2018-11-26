import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, Polyline } from 'react-google-maps';
// import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Widget from '../../../components/Widget';
// import { startListeningCoordenates } from '../../../actions/sales';

import s from './Google.scss';

const getVisit = gql(`
query getVisits($id: ID!) {
  getVisits(id: $id) {
      id
      salesmanId
      salesmanName
      clientId
      clientName
      visitDate
      visitEndDate
      visitStateId
      visitState
      visitStartAddress
      visitClientAddress
      visitDuration
  }
}
`);

const updateVisit = gql(`
  mutation UpdateVisit($input: UpdateVisitsInput!) {
  updateVisits(input: $input) {
    id
    salesmanId
    salesmanName
    clientId
    clientName
    visitDate
    visitEndDate
    visitStateId
    visitState
    visitStartAddress
    visitClientAddress
    visitDuration
  }
}`);

const pathCoordinates = [
  { lat: -12.095524, lng: -77.02175 },
  { lat: -12.095866, lng: -77.021625 },
  { lat: -12.095977, lng: -77.021632 },
  { lat: -12.096084, lng: -77.021643 },
  { lat: -12.096208, lng: -77.02166 },
  { lat: -12.096442, lng: -77.021688 },
  { lat: -12.096779, lng: -77.02173 },
  { lat: -12.096967, lng: -77.021758 },
  { lat: -12.097035, lng: -77.021767 },
  { lat: -12.09706, lng: -77.02177 },
  { lat: -12.09711, lng: -77.021781 },
  { lat: -12.097152, lng: -77.021791 },
  { lat: -12.097224, lng: -77.021806 },
  { lat: -12.097289, lng: -77.021838 },
  { lat: -12.097331, lng: -77.021516 },
  { lat: -12.097368, lng: -77.021173 },
  { lat: -12.097439, lng: -77.020698 },
  { lat: -12.097457, lng: -77.0205 },
  { lat: -12.097517, lng: -77.020277 },
  { lat: -12.097546, lng: -77.020092 },
  { lat: -12.09758, lng: -77.019784 },
  { lat: -12.097659, lng: -77.019269 },
  { lat: -12.097698, lng: -77.018789 },
  { lat: -12.097735, lng: -77.01851 },
  { lat: -12.097751, lng: -77.018405 },
  { lat: -12.097971, lng: -77.018451 },
  { lat: -12.098108, lng: -77.01852 },
  { lat: -12.098223, lng: -77.018574 },
  { lat: -12.098341, lng: -77.018622 },
  { lat: -12.098456, lng: -77.018665 },
  { lat: -12.098679, lng: -77.018706 },
  { lat: -12.098926, lng: -77.018676 },
  { lat: -12.099199, lng: -77.018641 },
  { lat: -12.099498, lng: -77.018542 },
  { lat: -12.099741, lng: -77.018451 },
  { lat: -12.099906, lng: -77.018388 },
  { lat: -12.099934, lng: -77.018436 },
  { lat: -12.099986, lng: -77.018557 },
  { lat: -12.100064, lng: -77.018756 },
  { lat: -12.100114, lng: -77.018872 },
  { lat: -12.100168, lng: -77.019004 },
  { lat: -12.100194, lng: -77.019057 },
  { lat: -12.100124, lng: -77.019085 },
  { lat: -12.100085, lng: -77.019105 },
  { lat: -12.100032, lng: -77.019123 },
  { lat: -12.099877, lng: -77.018866 },
];

const pathSecondaryCoordenates = [
  { lat: -12.095866, lng: -77.021625 },
  { lat: -12.095977, lng: -77.021632 },
  { lat: -12.096084, lng: -77.021643 },
  { lat: -12.096208, lng: -77.02166 },
  { lat: -12.096442, lng: -77.021688 },
  { lat: -12.096779, lng: -77.02173 },
  { lat: -12.096967, lng: -77.021758 },
  { lat: -12.097035, lng: -77.021767 },
  { lat: -12.09706, lng: -77.02177 },
  { lat: -12.09711, lng: -77.021781 },
  { lat: -12.097152, lng: -77.021791 },
  { lat: -12.097132, lng: -77.021938 },
  { lat: -12.097102, lng: -77.022136 },
  { lat: -12.09708, lng: -77.022299 },
  { lat: -12.097054, lng: -77.022497 },
  { lat: -12.097027, lng: -77.022693 },
  { lat: -12.096983, lng: -77.023027 },
  { lat: -12.096932, lng: -77.023405 },
  { lat: -12.096879, lng: -77.023786 },
  { lat: -12.096822, lng: -77.024236 },
  { lat: -12.096791, lng: -77.024452 },
  { lat: -12.096774, lng: -77.024618 },
  { lat: -12.096763, lng: -77.024671 },
  { lat: -12.096703, lng: -77.024643 },
  { lat: -12.096581, lng: -77.024587 },
  { lat: -12.096448, lng: -77.024526 },
  { lat: -12.096298, lng: -77.024454 },
  { lat: -12.096192, lng: -77.024405 },
  { lat: -12.096144, lng: -77.024386 },
  { lat: -12.096153, lng: -77.024201 },
];

const BasicMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{
        lat: parseFloat(-12.095524),
        lng: parseFloat(-77.02175),
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
      <Marker position={{ lat: parseFloat(-12.095524), lng: parseFloat(-77.02175) }} />
      {/* <Marker
        position={{
          lat: parseFloat(props.coord[props.coord.length - 1]),
          lng: parseFloat(props.coord[props.coord - 1]),
        }}
      /> */}
    </GoogleMap>
  )),
);

class Maps extends React.Component {
  static defaultProps = {
    match: {},
    mutate: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      coord: [],
      counter: 0,
      startLocations: [],
      intervalId: 0,
    };
  }

  componentDidMount() {
    if (this.props.match.params.visitId === '1') {
      this.setState({ startLocations: pathCoordinates });
    } else if (this.props.match.params.visitId === '2') {
      this.setState({ startLocations: pathSecondaryCoordenates });
    } else if (this.props.match.params.visitId === '10') {
      this.setState({ startLocations: pathSecondaryCoordenates });
    } else {
      this.setState({ startLocations: pathSecondaryCoordenates });
    }

    const intervalId = setInterval(this.drawMap.bind(this), 3000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  drawMap() {
    if (this.state.counter < this.state.startLocations.length) {
      const location = this.state.startLocations[this.state.counter];
      this.setState(prevState => ({
        coord: prevState.coord.concat(location),
      }));

      // const myHeaders = new Headers({
      //   'Content-Type': 'application/json',
      // });

      fetch('https://ps1jvwdsf4.execute-api.us-east-2.amazonaws.com/Prod/locations', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          visitId: parseInt(this.props.visit.id, 2),
          lat: location.lat,
          lng: location.lng,
        }),
      });
      // .then((res) => {
      //   console.log(res);
      // })
      // .catch((res) => {
      //   console.log(res);
      // });

      this.setState({ counter: this.state.counter + 1 });
    } else {
      clearInterval(this.state.intervalId);
      this.props.mutate({
        variables: { input: { id: 10, visitEndDate: new Date(), visitStateId: 1, visitState: 'Finalizada' } },
        refetchQueries: [{ query: getVisit }],
      });
    }
  }

  render() {
    const coord = this.state.coord;
    const visit = this.props.visit;
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
                    <span>{visit.salesmanName}</span>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    <span>{visit.visitState}</span>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    <span>
                      {Math.floor(
                        ((new Date(visit.visitEndDate).getTime() - new Date(visit.visitDate).getTime()) % 86400000) /
                          3600000,
                      )}{' '}
                      horas{' '}
                      {Math.round(
                        (((new Date(visit.visitEndDate).getTime() - new Date(visit.visitDate).getTime()) % 86400000) %
                          3600000) /
                          60000,
                      )}{' '}
                      minutos
                    </span>
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
                    <span>{visit.clientName}</span>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    <span>
                      {new Date(visit.visitDate).toLocaleDateString()} {new Date(visit.visitDate).toLocaleTimeString()}
                    </span>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    <span>
                      {new Date(visit.visitEndDate).toLocaleDateString()}{' '}
                      {new Date(visit.visitEndDate).toLocaleTimeString()}
                    </span>
                  </Col>
                </Row>
              </Widget>
            </Col>
          </Row>
          <BasicMap
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
                    <span>{visit.visitStartAddress}</span>
                  </Col>
                  <Col md={3} sm={6} xs={12}>
                    <span>{visit.visitClientAddress}</span>
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
  visit: PropTypes.any.isRequired,
  match: PropTypes.any,
  mutate: PropTypes.any,
};

// const mapDispatchToProps = dispatch => ({
//   startListeningCoordenates: visitId => dispatch(startListeningCoordenates(visitId)),
// });

// const mapStateToProps = state => ({
//   auth: state.messages,
// });

export default compose(
  withApollo,
  withRouter,
  withStyles(s),
  graphql(getVisit, {
    options: props => ({
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
      variables: { id: props.match.params.visitId },
    }),
    props: ({ data: { getVisits = {} } }) => ({
      visit: getVisits,
    }),
  }),
  graphql(updateVisit),
)(Maps);
