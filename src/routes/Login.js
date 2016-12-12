import { injectReducer } from '../store/reducers'

const routePath = 'login'
const reducerKey = 'auth'

export default store => ({
  path: routePath,
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const reducer = require('../redux/modules/auth').default
      const component = require('../containers/LoginContainer').default
      injectReducer(store, { key: reducerKey, reducer })
      cb(null, component)
    })
  }
})
