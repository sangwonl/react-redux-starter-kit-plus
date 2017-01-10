import SemanticLayout from '../layouts/SemanticLayout'
import HomeRoute from './Home'
import LoginRoute from './Login'
import CounterRoute from './Counter'
import RedditsRoute from './Reddits'
import ChartRoute from './Chart'
import NotFoundRoute from './Errors'
import { authRequired } from '../services/auth'

const createRoutes = store => ({
  path: '/',
  component: SemanticLayout,
  indexRoute: HomeRoute,
  childRoutes: [
    LoginRoute(store),
    authRequired(CounterRoute(store)),
    RedditsRoute(store),
    ChartRoute(store),
    NotFoundRoute
  ]
})

export default createRoutes
