import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Button } from 'reactstrap';

import ReactTable from 'react-table';
import { graphql, compose, withApollo } from 'react-apollo';
import ListVisitsQuerys from '../../../graphql/listVisits.gql';

// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';

// import injectReducer from '../../../utils/injectReducer';
// import injectSaga from '../../../utils/injectSaga';
// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError,
// } from '../../../components/Selectors';

import { reactTableData } from './data';
import Widget from '../../../components/Widget/Widget';
import s from './table-visit-component.scss';
import FormWizardVisitComponent from '../form-visit-component/form-visit-component';

class TableVisitsComponent extends React.Component {
	static propTypes = {
		visits: PropTypes.any.isRequired
	};
	constructor(props) {
		super(props);

		this.state = {
			reactTable: reactTableData(),
			addVisit: false,
			openedVisit: null,
			openAddVisit: null,
			showBinnacleTable: false
		};
	}

	openVisitWizard() {
		this.setState({ addVisit: true });
	}

	render() {
		const { visits } = this.props;
		const { addVisit } = this.state;
		const parsedvisits = visits.map(item => {
			item.clientName = JSON.parse(item.client).clientName;
			item.salesmanName = JSON.parse(item.salesMan).salesmanName;
			item.visitClientAddress = JSON.parse(item.client).visitClientAddress;
			return item;
		});
		return (
			<div>
				<h2 className="page-title">
					Visitas en <span className="fw-semi-bold">agenda</span>
				</h2>
				{/* eslint-disable */}
				{!addVisit ? (
					<Widget
						title={
							<h4>
								<span className="fw-semi-bold">Visitas</span>
							</h4>
						}
						collapse
						close
					>
						<Button
							color="primary"
							className="width-200 mb-xs mr-xs"
							onClick={() => this.openVisitWizard()}
						>
							<i className="glyphicon glyphicon-plus text-white mr-xs mb-xs" />
							Agregar visita
						</Button>
						<ReactTable
							data={parsedvisits}
							columns={[
								{
									Header: 'Razón Social',
									accessor: 'clientName'
								},
								{
									Header: 'Contacto',
									accessor: 'salesmanName'
								},
								{
									Header: 'Dirección',
									accessor: 'visitClientAddress'
								},
								{
									Header: 'Fecha',
									accessor: 'visitDate'
								},
								{
									Header: 'Hora',
									accessor: 'visitDate'
								},
								{
									Header: 'Estado',
									accessor: 'visitSate'
								}
							]}
							defaultPageSize={10}
							className="-striped -highlight"
						/>
					</Widget>
				) : addVisit ? (
					<FormWizardVisitComponent />
				) : (
					<FormWizardVisitComponent />
				)}
				{/* eslint-disable */}
			</div>
		);
	}
}
export default withApollo(
	compose(
		graphql(ListVisitsQuerys.listVisitTables, {
			options: {
				fetchPolicy: 'network-only',
				errorPolicy: 'ignore'
			},
			props: ({ data: { listVisitTables = { items: [] } } }) => ({
				visits: listVisitTables.items
			})
		})
	)(withStyles(s)(TableVisitsComponent))
);
