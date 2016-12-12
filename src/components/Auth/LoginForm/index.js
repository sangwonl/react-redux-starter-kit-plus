import React from 'react'
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
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  help: React.PropTypes.string
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
  handleSubmit: React.PropTypes.func.isRequired
}

export default reduxForm({ form: 'login' })(LoginForm)
