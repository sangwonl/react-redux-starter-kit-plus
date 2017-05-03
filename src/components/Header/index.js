import React from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import { Tabs, Tab } from 'material-ui'

import './Header.scss'

class Header extends React.Component {
  static defaultProps = {
  }

  static propTypes = {
  }

  // constructor (props) {
  //   super(props)
  // }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <div>
        <AppBar
          title='React Redux Starter Kit (Plus)'
          iconClassNameRight='muidocs-icon-navigation-expand-more' />

        <Tabs>
          <Tab label='Home' containerElement={<Link to='/' />} />
          <Tab label='Counter' containerElement={<Link to='/counter' />} />
          <Tab label='Reddits' containerElement={<Link to='/reddits' />} />
          <Tab label='Charts' containerElement={<Link to='/charts' />} />
        </Tabs>
      </div>
    )
  }
}

export default Header
