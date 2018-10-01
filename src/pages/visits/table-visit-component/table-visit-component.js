import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';


import ReactTable from 'react-table';

import { reactTableData, reactBootstrapTableData } from './data';
import Widget from '../../../components/Widget/Widget';
import s from './table-visit-component.scss';

class TableVisitsComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      reactTable: reactTableData(),
      reactBootstrapTable: reactBootstrapTableData(),
    };
  }

  renderSizePerPageDropDown = (props) => {
    const limits = [];
    props.sizePerPageList.forEach((limit) => {
      limits.push(<DropdownItem key={limit} onClick={() => props.changeSizePerPage(limit)}>{ limit }</DropdownItem>);
    });

    return (
      <Dropdown isOpen={props.open} toggle={props.toggleDropDown}>
        <DropdownToggle color="default" caret>
          { props.currSizePerPage }
        </DropdownToggle>
        <DropdownMenu>
          { limits }
        </DropdownMenu>
      </Dropdown>
    );
  };

  render() {

    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>Estás aquí</BreadcrumbItem>
          <BreadcrumbItem active>Agenda</BreadcrumbItem>
        </Breadcrumb>
        <h2 className="page-title">Visitas en <span className="fw-semi-bold">agenda</span></h2>
        <Widget title={<h4><span className="fw-semi-bold">Visitas</span></h4>} collapse close>
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
      </div>
    );
  }

}

export default withStyles(s)(TableVisitsComponent);
