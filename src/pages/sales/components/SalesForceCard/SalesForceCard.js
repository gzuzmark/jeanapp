import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Row, Col } from 'reactstrap';

import Widget from '../../../../components/Widget';

class SalesForceCard extends React.Component {
  componentDidMount() {}

  render() {
    const { salesman, client, visitDate, visitState } = this.props;
    return (
      <div className="root">
        <Row>
          <Col lg={12} md={12} xs={12}>
            <Widget className="">
              <div className="clearfix">
                <Row className="flex-nowrap">
                  <Col xs={3}>
                    <span className="widget-icon">
                      <i className="glyphicon glyphicon-user text-primary" />
                    </span>
                  </Col>
                  <Col xs="9">
                    <h6 className="m-0">VENDEDOR</h6>
                    <p className="h2 m-0 fw-normal">{salesman}</p>
                  </Col>
                </Row>
                <Row className="flex-nowrap">
                  <Col xs={12}>
                    <h6 className="m-0">Cliente</h6>
                    <p className="value5">{client}</p>
                  </Col>
                </Row>
                <Row className="flex-nowrap">
                  <Col xs="12">
                    <h6 className="m-0">Fecha</h6>
                    <p className="value5">{visitDate}</p>
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
          </Col>
        </Row>
      </div>
    );
  }
}

SalesForceCard.propTypes = {
  salesman: PropTypes.any.isRequired,
  client: PropTypes.string.isRequired,
  visitDate: PropTypes.string.isRequired,
  visitState: PropTypes.any.isRequired,
};

export default SalesForceCard;
