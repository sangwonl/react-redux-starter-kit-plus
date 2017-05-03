import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.shape({}),
    store: PropTypes.shape({})
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={store.history}>
            {routes}
          </Router>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
