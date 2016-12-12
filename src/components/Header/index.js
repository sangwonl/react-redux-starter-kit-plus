import React from 'react'
import { IndexLink, Link } from 'react-router'
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
        <h1>React Redux Starter Kit</h1>
        <IndexLink to='/' activeClassName='route--active'>
          Home
        </IndexLink>
        {' · '}
        <Link to='/counter' activeClassName='route--active'>
          Counter
        </Link>
        {' · '}
        <Link to='/reddits' activeClassName='route--active'>
          Reddits
        </Link>
      </div>
    )
  }
}

export default Header
