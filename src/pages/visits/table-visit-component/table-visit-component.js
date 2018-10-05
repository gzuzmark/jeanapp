import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';

import ReactTable from 'react-table';

import { reactTableData } from './data';
import Widget from '../../../components/Widget/Widget';
import s from './table-visit-component.scss';
import FormWizardVisitComponent from '../form-visit-component/form-visit-component';

class TableVisitsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reactTable: reactTableData(),
      addVisit: false,
      openedVisit: null,
      openAddVisit: null,
    };
  }

  openVisitWizard() {
    this.setState({ addVisit: true });
  }

  render() {
    const { addVisit } = this.state;
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>Estás aquí</BreadcrumbItem>
          <BreadcrumbItem active>Agenda</BreadcrumbItem>
        </Breadcrumb>
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
            <Button color="primary" className="width-200 mb-xs mr-xs" onClick={() => this.openVisitWizard()}>
              <i className="glyphicon glyphicon-plus text-white mr-xs mb-xs" />
              Agregar visitar
            </Button>
            <ReactTable
              data={this.state.reactTable}
              filterable
              columns={[
                {
                  Header: 'Razón Social',
                  accessor: 'ruc',
                },
                {
                  Header: 'Contacto',
                  accessor: 'contacto',
                },
                {
                  Header: 'Dirección',
                  accessor: 'direccion',
                },
                {
                  Header: 'Fecha',
                  accessor: 'fecha',
                },
                {
                  Header: 'Hora',
                  accessor: 'hora',
                },
                {
                  Header: 'Estado',
                  accessor: 'estado',
                },
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

export default withStyles(s)(TableVisitsComponent);
