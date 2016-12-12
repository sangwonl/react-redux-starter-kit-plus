import { injectReducer } from '../store/reducers'

const routePath = 'reddits'
const reducerKey = 'reddits'

export default store => ({
  path: routePath,
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const reducer = require('../redux/modules/reddits').default
      const component = require('../containers/RedditsContainer').default
      injectReducer(store, { key: reducerKey, reducer })
      cb(null, component)
    })
  }
})
