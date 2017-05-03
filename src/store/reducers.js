import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import locationReducer from './location'

import authReducer from 'redux/modules/auth'
import counterReducer from 'redux/modules/counter'
import redditsReducer from 'redux/modules/reddits'

const makeRootReducer = asyncReducers => combineReducers({
  location: locationReducer,
  routing: routerReducer,
  form: formReducer,
  auth: authReducer,
  counter: counterReducer,
  reddits: redditsReducer,
  ...asyncReducers
})

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    return
  }

  /* eslint-disable no-param-reassign */
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
  /* eslint-enable no-param-reassign */
}

export const preloadActions = () => {
  return (dispatch) => {}
}

export default makeRootReducer
