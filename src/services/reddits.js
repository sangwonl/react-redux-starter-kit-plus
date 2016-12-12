import fetch from 'isomorphic-fetch'

const redditHost = 'http://www.reddit.com'

const getPosts = subreddit =>
  fetch(`${redditHost}/r/${subreddit}.json`)
    .then(response => response.json())

export default { getPosts }
