import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { authRequired } from 'services/auth'
import MuiLayout from 'layouts/MuiLayout'
import HomeView from 'components/HomeView'
import LoginContainer from 'containers/LoginContainer'
import CounterContainer from 'containers/CounterContainer'
import RedditsContainer from 'containers/RedditsContainer'
import ChartContainer from 'containers/ChartContainer'

const NotFoundPage = props => (
  <div>
    <h2>404 Not Found</h2>
  </div>
)

const AppRoutes = (
  <Route component={MuiLayout}>
    <Route path='/'>
      <IndexRoute component={HomeView} />
      <Route path='login' component={LoginContainer} />
      <Route path='counter' onEnter={authRequired} component={CounterContainer} />
      <Route path='reddits' component={RedditsContainer} />
      <Route path='charts' component={ChartContainer} />
      <Route path='*' component={NotFoundPage} />
    </Route>
  </Route>
)

export default AppRoutes
