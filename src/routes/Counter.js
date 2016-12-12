import { injectReducer } from '../store/reducers'

const routePath = 'counter'
const reducerKey = 'counter'

export default store => ({
  path: routePath,
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const reducer = require('../redux/modules/counter').default
      const component = require('../containers/CounterContainer').default
      injectReducer(store, { key: reducerKey, reducer })
      cb(null, component)
    })
  }
})
