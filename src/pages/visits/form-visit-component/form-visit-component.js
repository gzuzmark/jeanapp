import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col, Button, FormGroup, Label, Nav, NavLink, NavItem, Progress } from 'reactstrap';
import Formsy from 'formsy-react';
// import Select2 from 'react-select2-wrapper';
import Datetime from 'react-datetime';
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
// import { cardTypesData } from './form-visit-data';

import InputValidation from '../../../components/InputValidation/InputValidation';
import Widget from '../../../components/Widget';
import s from './form-visit-component.scss';
// import { changeRuc } from './actions';
// import { loadRepos } from '../table-visit-component/actions';

const count = 4;
const StepsComponents = {
  Step1: function Step1() {
    return (
      <fieldset>
        <FormGroup>
          <Label for="username">RUC</Label>
          <InputValidation
            type="text"
            id="number"
            name="number"
            required
            validations="isNumeric"
            validationError={{
              isNumeric: 'Ingrese el ruc.',
            }}
          />
          <p className="help-block">Ejmp. 10460586459</p>
        </FormGroup>
      </fieldset>
    );
  },
  Step2: function Step2() {
    return (
      <fieldset>
        <FormGroup>
          <Label for="address">Nombres</Label>
          <InputValidation
            type="text"
            id="address"
            name="address"
            validations={{ isAlpha: true }}
            required
            validationError={{ isAlpha: 'Indique sus nombres' }}
          />
          <p className="help-block">Indique sus nombres</p>
        </FormGroup>
        <FormGroup>
          <Label for="address">Apellidos</Label>
          <InputValidation
            type="text"
            id="address"
            name="address"
            validations={{ isAlpha: true }}
            required
            validationError={{ isAlpha: 'Indique sus apellidos' }}
          />
          <p className="help-block">Indique sus apellidos</p>
        </FormGroup>
        <FormGroup>
          <Label for="address">Teléfono</Label>
          <InputValidation
            type="text"
            id="address"
            name="address"
            validations={{ isAlpha: true }}
            required
            validationError={{ isAlpha: 'Indique su teléfono' }}
          />
          <p className="help-block">Ejmp 012720574, 996662509 </p>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <InputValidation
            type="text"
            id="email"
            name="email"
            validations={{ isEmail: true }}
            required
            validationError={{ isEmail: 'Indique su correo electrónico' }}
          />
          <p className="help-block">Indique su correo electrónico</p>
        </FormGroup>
        <FormGroup>
          <Label for="address">Cargo</Label>
          <InputValidation
            type="text"
            id="address"
            name="address"
            validations={{ isAlpha: true }}
            validationError={{ isAlpha: 'Indique su cargo' }}
          />
          <p className="help-block">Indique su cargo</p>
        </FormGroup>
      </fieldset>
    );
  },
  Step3: function Step3(props) {
    return (
      <fieldset>
        <FormGroup>
          <Label for="address">Dirección</Label>
          <InputValidation
            type="text"
            id="address"
            name="address"
            validations={{ isAlpha: true }}
            validationError={{ isAlpha: 'Indique su dirección' }}
          />
          <p className="help-block">Indique su dirección</p>
        </FormGroup>
        <FormGroup>
          <Label for="expiration-data">Fecha y hora</Label>
          <div className="datepicker">
            <Datetime
              id="datepicker"
              open={props.isDatePickerOpen} //eslint-disable-line
              viewMode="days"
            />
          </div>
        </FormGroup>
      </fieldset>
    );
  },
  Step4: function Step4() {
    return (
      <fieldset>
        <h2>Muchas Gracias!</h2>
        <p>El registro fue exitoso.</p>
      </fieldset>
    );
  },
};

class FormWizardVisitComponet extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      currentStep: 1,
      progress: 25,
      isDatePickerOpen: false,
    };
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  nextStep() {
    let currentStep = this.state.currentStep;
    if (currentStep >= count) {
      currentStep = count;
    } else {
      currentStep += 1;
    }

    this.setState({
      currentStep,
      progress: (100 / count) * currentStep,
    });
  }

  previousStep() {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1) {
      currentStep = 1;
    } else {
      currentStep -= 1;
    }

    this.setState({
      currentStep,
      progress: (100 / count) * currentStep,
    });
  }

  render() {
    // const { loading, error, visits } = this.props;
    // const visitsListProps = {
    //   loading,
    //   error,
    //   visits,
    // };
    const currentStep = this.state.currentStep;
    return (
      <div className={s.root}>
        <Row>
          <Col xs={0} lg={1} />
          <Col xl={8} lg={12}>
            <Widget className={s.formWizard}>
              <Nav pills justified className={s.wizardNavigation}>
                <NavItem>
                  <NavLink active={currentStep === 1}>
                    <small>1.</small>
                    &nbsp; Validacion
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={currentStep === 2} onClick={this.nextStep}>
                    <small>2.</small>
                    &nbsp;Contacto
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={currentStep === 3}>
                    <small>3.</small>
                    &nbsp;Ubicación
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={currentStep === 4}>
                    <small>4.</small>
                    &nbsp;Confirmación
                  </NavLink>
                </NavItem>
              </Nav>
              <Progress value={this.state.progress} color="gray-light" className="progress-xs" />
              <div className="tab-content">
                <div className={s.stepBody}>
                  <Formsy.Form>
                    {currentStep === 1 && <StepsComponents.Step1 />}
                    {currentStep === 2 && <StepsComponents.Step2 />}
                    {currentStep === 3 && <StepsComponents.Step3 />}
                    {currentStep === 4 && <StepsComponents.Step4 isDatePickerOpen={this.state.isDatePickerOpen} />}
                  </Formsy.Form>
                </div>

                <div className="description">
                  <ul className="pager wizard">
                    <li className="previous">
                      <Button disabled={currentStep === 1} color="primary" onClick={this.previousStep}>
                        <i className="fa fa-caret-left" />
                        &nbsp;Previous
                      </Button>
                    </li>
                    {currentStep < count && (
                      <li className="next">
                        <Button color="primary" onClick={this.nextStep}>
                          Next <i className="fa fa-caret-right" />
                        </Button>
                      </li>
                    )}
                    {currentStep === count && (
                      <li className="finish">
                        <Button color="success">
                          Finish <i className="fa fa-check" />
                        </Button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(s)(FormWizardVisitComponet);
