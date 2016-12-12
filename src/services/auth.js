export const AUTH_ROUTE_PATH = '/login'

const isAuthenticated = () => {
  const authToken = 'abcd1234'
  if (authToken === 'abcd1235') {
    return true
  }
  return false
}

const authRequired = (route) => {
  /* eslint-disable no-param-reassign */
  route.onEnter = (nextState, replace) => {
    if (!isAuthenticated()) {
      replace(AUTH_ROUTE_PATH)
    }
  }
  /* eslint-enable no-param-reassign */
  return route
}

export { authRequired }
