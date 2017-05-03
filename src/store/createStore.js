import { applyMiddleware, compose, createStore } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'

import { updateLocation } from './location'
import makeRootReducer, { preloadActions } from './reducers'

export default (initialState = {}) => {
  // Middleware Configuration
  const middleware = [thunk]

  // Store Enhancers
  const enhancers = []

  let composeEnhancers = compose

  if (__DEV__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension
    }
  }

  // Store Instantiation and HMR Setup
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  // Keep redux router history
  store.history = syncHistoryWithStore(browserHistory, store)

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = store.history.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(makeRootReducer(store.asyncReducers))
    })
  }

  // Preload state by dispatching actions
  store.dispatch(preloadActions())

  return store
}
