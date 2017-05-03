import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

import './Reddits.scss'

const RedditItemHeader = props => (
  <thead>
    <tr>
      { props.titles.map((title, i) => <th key={i}>{title}</th>) }
    </tr>
  </thead>
)

const RedditItem = props => (
  <tr>
    <td>{props.author}</td>
    <td>{props.title}</td>
  </tr>
)

const RedditItemBody = props => (
  <tbody>
    { props.items.map((item, i) =>
      <RedditItem key={i} title={item.title} author={item.author} />) }
  </tbody>
)

const RedditItems = props => (
  <Table responsive>
    <RedditItemHeader titles={['Author', 'Title']} />
    <RedditItemBody items={props.items} />
  </Table>
)

RedditItemHeader.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string)
}

RedditItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

RedditItemBody.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(RedditItem.propTypes))
}

RedditItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(RedditItem.propTypes))
}

export default RedditItems
