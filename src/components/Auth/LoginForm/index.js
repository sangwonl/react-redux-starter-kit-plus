import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'

import {
  Col,
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap'

const FieldGroup = props => (
  <FormGroup controlId={props.id}>
    <Col sm={2}>
      <ControlLabel>{props.label}</ControlLabel>
    </Col>
    <Col sm={10}>
      <FormControl {...props} />
    </Col>
    {props.help && <HelpBlock>{props.help}</HelpBlock>}
  </FormGroup>
)

FieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  help: PropTypes.string
}

const LoginForm = props => (
  <Form horizontal onSubmit={props.handleSubmit}>
    <FieldGroup
      id='loginEmail'
      type='email'
      name='email'
      label='Email'
      placeholder='hello@redux.org'
    />
    <FieldGroup
      id='loginPassword'
      type='password'
      name='password'
      label='Password'
    />
    <Button type='submit'>Submit</Button>
  </Form>
)

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({ form: 'login' })(LoginForm)
