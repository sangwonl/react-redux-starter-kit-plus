// Constants
export const REQUEST_LOGIN = 'REQEUST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

// Action Creators
export const requestLogin = (email, password) => ({
  type: REQUEST_LOGIN,
  payload: { email, password }
})

export const receiveLogin = (email, json) => ({
  type: RECEIVE_LOGIN,
  payload: {
    email,
    authType: json.data.auth_type,
    authToken: json.data.auth_token,
    loginedAt: json.data.logined_at
  }
})

export const login = (email, password) => (dispatch, getState) => {
  dispatch(requestLogin(email, password))
  return setTimeout(() => {
    const jsonResponse = {
      data: {
        auth_type: 'jwt',
        auth_token: '1234.asdfasdf',
        logined_at: '1481256908'
      }
    }
    dispatch(receiveLogin(email, jsonResponse))
  }, 1000)
}

// Reducer
const ACTION_HANDLERS = {
  [REQUEST_LOGIN]: (state, action) => ({
    ...state,
    isFetching: true
  }),

  [RECEIVE_LOGIN]: (state, action) => ({
    ...state,
    isFetching: false,
    authType: action.payload.authType,
    authToken: action.payload.authToken,
    loginedAt: action.payload.receivedAt
  })
}

const initialState = {
  isFetching: false,
  authType: null,
  authToken: null,
  loginedAt: null
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
