import axios from 'axios'

const redditHost = 'http://www.reddit.com'

const getPosts = subreddit =>
  axios.get(`${redditHost}/r/${subreddit}.json`)

export default { getPosts }
