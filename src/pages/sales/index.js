import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col } from 'reactstrap';
// import { connect } from 'react-redux';
// import gql from 'graphql-tag';
import { graphql, compose, withApollo } from 'react-apollo';
import { searchSalesVisits } from '../../actions/sales';
import ListVisitsQuerys from '../../graphql/listVisits.gql';
import SalesForceCard from './components/SalesForceCard/SalesForceCard';

// import mock from './mock';
import s from './Sales.scss';

// const getVisits = gql(`
// query listVisits {
//   listVisits {
//     items {
//       id
//       salesmanId
//       salesmanName
//       clientId
//       clientName
//       visitDate
//       visitEndDate
//       visitStateId
//       visitState
//       visitStartAddress
//       visitClientAddress
//       visitDuration
//     }
//   }
// }
// `);
class ProductList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    // isFetching: PropTypes.bool.isRequired,
    visits: PropTypes.any.isRequired,
  };

  static sortById(a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }

  constructor(props) {
    super(props);
    this.state = {
      salesman: '',
      visitState: 'En progreso',
      companyName: '',
      date: new Date(),
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
    this.props.dispatch(
      searchSalesVisits({ salesmanName: this.state.salesmanName, companyName: this.state.companyName }),
    );
    e.preventDefault();
  }

  filterVisits(item) {
    const isSalesman = item.salesmanName.toLowerCase().indexOf(this.state.salesman.toLowerCase()) !== -1;
    const isCompany = item.clientName.toLowerCase().indexOf(this.state.companyName.toLowerCase()) !== -1;
    const isState = item.visitState.toLowerCase().indexOf(this.state.visitState.toLowerCase()) !== -1;
    // const visitDate = new Date(item.visitDate).setHours(0, 0, 0, 0);
    // const actualDate = new Date().setHours(0, 0, 0, 0);
    // const isDate = visitDate === actualDate;
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
    const { visits } = this.props;

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
                        placeholder="razón social..."
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
              {visits
                .sort(this.sortById)
                .filter(this.filterVisits)
                .map(item => <SalesForceCard key={item.id} {...item} />)}
            </div>
          </div>

          // <Switch>

          // </Switch>
        )}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     isFetching: state.salesVisits.isFetching,
//     isSearched: state.salesVisits.isSearched,
//     visits: state.salesVisits.visits,
//   };
// }

export default withApollo(
  compose(
    graphql(ListVisitsQuerys.listVisits, {
      options: {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore',
      },
      props: ({ data: { listVisits = { items: [] } } }) => ({
        visits: listVisits.items,
      }),
    }),
  )(withStyles(s)(ProductList)),
);
