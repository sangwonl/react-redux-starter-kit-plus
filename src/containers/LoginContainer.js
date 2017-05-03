import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { login } from '../redux/modules/auth'

import LoginForm from '../components/Auth/LoginForm'

class LoginContainer extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  }

  componentWillMount () {
  }

  componentDidMount () {
  }

  componentWillReceiveProps (nextProps) {
  }

  shouldComponentUpdate (nextProps) {
    return true
  }

  componentWillUpdate () {
  }

  componentDidUpdate () {
  }

  handleSubmit = (values) => {
    const { email, password } = values
    this.props.login(email, password)
  }

  render () {
    return (
      <LoginForm onSubmit={this.handleSubmit} />
    )
  }
}

const mapDispatchToProps = { login }
const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
