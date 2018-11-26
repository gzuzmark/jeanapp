import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Badge, Row, Col } from 'reactstrap';

import Widget from '../../../../components/Widget';

const getLink = id => '/app/maps/google/:visitId'.replace(':visitId', id);
class SalesForceCard extends React.Component {
  componentDidMount() {}

  render() {
    const { id, salesmanName, clientName, visitDate, visitState } = this.props;
    const link = getLink(id);
    return (
      <div className="">
        <Row>
          <Col lg={12} md={12} xs={12}>
            <Link to={link} className="sales-card">
              <Widget className="" style={{ cursor: 'pointer' }}>
                <div className="clearfix">
                  <Row className="flex-nowrap">
                    <Col xs={3}>
                      <span className="widget-icon">
                        <i className="glyphicon glyphicon-user text-primary" />
                      </span>
                    </Col>
                    <Col xs="9">
                      <h6 className="m-0">VENDEDOR</h6>
                      <p className="h2 m-0 fw-normal">{salesmanName}</p>
                    </Col>
                  </Row>
                  <Row className="flex-nowrap">
                    <Col xs={12}>
                      <h6 className="m-0">Cliente</h6>
                      <p className="value5">{clientName}</p>
                    </Col>
                  </Row>
                  <Row className="flex-nowrap">
                    <Col xs="12">
                      <h6 className="m-0">Fecha</h6>
                      <p className="value5">{new Date(visitDate).toLocaleDateString()}</p>
                    </Col>
                  </Row>
                  <Row className="flex-nowrap">
                    <Col xs="12">
                      <h6 className="m-0">Estado</h6>
                      {visitState === 'En progreso' ? (
                        <Badge color="warning">{visitState}</Badge>
                      ) : (
                        <Badge color="success">{visitState}</Badge>
                      )}
                    </Col>
                  </Row>
                </div>
              </Widget>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

SalesForceCard.propTypes = {
  id: PropTypes.any.isRequired,
  salesmanName: PropTypes.any.isRequired,
  clientName: PropTypes.string.isRequired,
  visitDate: PropTypes.string.isRequired,
  visitState: PropTypes.any.isRequired,
};

export default SalesForceCard;
