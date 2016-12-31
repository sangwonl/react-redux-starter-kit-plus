const routePath = 'chart'

export default store => ({
  path: routePath,
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const component = require('../containers/ChartContainer').default
      cb(null, component)
    })
  }
})
