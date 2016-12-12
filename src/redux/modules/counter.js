// Constants
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_MULTIPLY = 'COUNTER_MULTIPLY'

// Action Creators
export const increment = (value = 1) => ({
  type: COUNTER_INCREMENT,
  payload: value
})

export const multiply = (value = 1) => ({
  type: COUNTER_MULTIPLY,
  payload: value
})

export const doubleAsync = () => (dispatch, getState) => (
  new Promise((resolve) => {
    setTimeout(() => {
      dispatch(multiply(2))
      resolve()
    }, 200)
  })
)

// Reducer
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload,
  [COUNTER_MULTIPLY]: (state, action) => state * action.payload
}

const initialState = 0

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
