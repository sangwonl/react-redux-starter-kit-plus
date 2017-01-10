import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'

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
          <Router history={browserHistory}>
            {routes}
          </Router>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
