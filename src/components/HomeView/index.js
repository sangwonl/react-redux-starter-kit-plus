import React, { PropTypes } from 'react'
import Notifications from 'react-notification-system'

import DuckImageSrc from './assets/Duck.jpg'
import './HomeView.scss'

const DuckImage = props => (
  <div className='duck'>
    <a tabIndex='0' onClick={props.handleTouch}>
      <img alt='This is a duck, because Redux!' src={DuckImageSrc} />
    </a>
  </div>
)

DuckImage.propTypes = {
  handleTouch: PropTypes.func.isRequired
}

class HomeView extends React.Component {
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

  handleQuack = (event) => {
    event.preventDefault()
    this.notifications.addNotification({ message: 'Quack!', level: 'success' })
  }

  render () {
    return (
      <div>
        <h4>Welcome!</h4>
        <DuckImage handleTouch={this.handleQuack} />
        <Notifications ref={(c) => { this.notifications = c }} />
      </div>
    )
  }
}

export default HomeView
