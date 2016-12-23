import redditsService from '../../services/reddits'

// Constants
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

// Action Creators
export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  payload: { subreddit }
})

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  payload: {
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
})

export const fetchPosts = subreddit => async (dispatch, getState) => {
  dispatch(requestPosts(subreddit))
  const res = await redditsService.getPosts(subreddit)
  dispatch(receivePosts(subreddit, res.data))
}

// Reducer
const ACTION_HANDLERS = {
  [REQUEST_POSTS]: (state, action) => ({
    ...state,
    isFetching: true,
    didInvalidate: false
  }),

  [RECEIVE_POSTS]: (state, action) => ({
    ...state,
    isFetching: false,
    didInvalidate: false,
    items: action.payload.posts,
    lastUpdated: action.payload.receivedAt
  })
}

const initialState = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: null,
  items: []
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
