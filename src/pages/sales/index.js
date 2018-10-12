import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchSalesVisits } from '../../actions/sales';

import SalesForceCard from './components/SalesForceCard/SalesForceCard';

import mock from './mock';
import s from './Sales.scss';

class ProductList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      salesman: '',
      visitState: 'En progreso',
      companyName: '',
      date: new Date(),
      visits: mock,
    };

    this.doSearch = this.doSearch.bind(this);
    this.changeSalesman = this.changeSalesman.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.changeVisitState = this.changeVisitState.bind(this);
    this.filterVisits = this.filterVisits.bind(this);
  }

  changeSalesman(event) {
    this.setState({ salesman: event.target.value });
  }

  changeCompany(event) {
    this.setState({ companyName: event.target.value });
  }

  changeVisitState(event) {
    this.setState({ visitState: event.target.value });
  }

  doSearch(e) {
    this.props.dispatch(searchSalesVisits({ salesman: this.state.salesman, companyName: this.state.companyName }));
    e.preventDefault();
  }

  filterVisits(item) {
    const isSalesman = item.salesman.toLowerCase().indexOf(this.state.salesman.toLowerCase()) !== -1;
    const isCompany = item.client.toLowerCase().indexOf(this.state.companyName.toLowerCase()) !== -1;
    const isState = item.visitState.toLowerCase().indexOf(this.state.visitState.toLowerCase()) !== -1;
    return isSalesman && isCompany && isState;
  }

  // openMap = (item) => {
  //   localStorage.setItem('lat', item.lat);
  //   localStorage.setItem('lng', item.long);

  //   this.props.history.push({
  //     pathname: '/app/maps/google',
  //   });
  // };

  render() {
    const { isModalActive } = this.state;
    // if (redirect) {
    //   return <Redirect push to="/app/maps/google" />;
    // }
    return (
      <div>
        {!isModalActive && (
          <div>
            <form onSubmit={this.filterVisits}>
              <div className={s.productsListFilters}>
                <Row>
                  <Col>
                    <label htmlFor="salesman">Nombre del Vendedor:</label>
                  </Col>
                  <Col>
                    <div className="input-group input-group-transparent">
                      <input
                        id="salesman"
                        className="form-control fs-mini"
                        type="text"
                        placeholder="vendedor..."
                        value={this.state.salesman}
                        onChange={this.changeSalesman}
                      />
                      <span className="input-group-addon">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </Col>
                  <Col>
                    <select
                      value={this.state.visitState}
                      onChange={this.changeVisitState}
                      className="form-control fs-mini"
                    >
                      <option>En progreso</option>
                      <option>Finalizada</option>
                    </select>
                  </Col>
                </Row>
              </div>
              <div className={s.productsListFilters}>
                <Row>
                  <Col>
                    <label htmlFor="companyName">Razón Social:</label>
                  </Col>
                  <Col>
                    <div className="input-group input-group-transparent">
                      <input
                        id="companyName"
                        className="form-control fs-mini"
                        type="text"
                        placeholder="vendedor..."
                        value={this.state.companyName}
                        onChange={this.changeCompany}
                      />
                      <span className="input-group-addon">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </Col>
                  <Col>
                    <div className={s.filterElement}>
                      <div className={s.filterElementLable}>Fecha actual</div>
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="clearfix">
                <div className="btn-toolbar float-right">
                  <button type="submit" href="/app" className="btn btn-inverse btn-sm">
                    {this.props.isFetching ? 'Loading...' : 'Search'}
                  </button>
                </div>
              </div>
            </form>
            <div className={s.mobileFilterButtons}>
              <button className="btn btn-transparent btn-lg" onClick={() => this.openModal(1)}>
                Sort <i className="fa fa-2x fa-angle-down" />
              </button>
              <button className="btn btn-transparent btn-lg" onClick={() => this.openModal(0)}>
                Filter <i className="fa fa-2x fa-angle-down" />
              </button>
            </div>
            <div className={s.productsListElements}>
              {this.state.visits.filter(this.filterVisits).map(item => <SalesForceCard key={item.id} {...item} />)}
            </div>
          </div>

          // <Switch>

          // </Switch>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.salesVisits.isFetching,
    isSearched: state.salesVisits.isSearched,
    visits: state.salesVisits.visits,
  };
}

export default withRouter(connect(mapStateToProps)(withStyles(s)(ProductList)));
