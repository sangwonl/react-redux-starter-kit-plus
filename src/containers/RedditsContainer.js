import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchPosts } from '../redux/modules/reddits'

import RedditItems from '../components/Reddits'

class RedditsContainer extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.any),
    isFetching: PropTypes.bool.isRequired,
    fetchPosts: PropTypes.func.isRequired
  }

  componentWillMount () {
  }

  componentDidMount () {
    this.props.fetchPosts('reactjs')
  }

  componentWillReceiveProps (nextProps) {
  }

  shouldComponentUpdate (nextProps) {
    return true
  }

  componentWillUpdate () {
  }

  componentDidUpdate () {
  }

  render () {
    const { isFetching, items } = this.props
    return (
      <div>
        { isFetching && <h2>Loading...</h2> }
        { !isFetching && <RedditItems items={items} /> }
      </div>
    )
  }
}

const mapDispatchToProps = { fetchPosts }
const mapStateToProps = state => ({
  isFetching: state.reddits.isFetching,
  items: state.reddits.items
})

export default connect(mapStateToProps, mapDispatchToProps)(RedditsContainer)
