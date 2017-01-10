import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import { Sidebar, Menu, Segment } from 'semantic-ui-react'

class HeadedContainer extends React.Component {
  static defaultProps = {
  }

  static propTypes = {
    showHeader: PropTypes.bool,
    children: PropTypes.element
  }

  constructor (props) {
    super(props)

    this.state = { visible: props.showHeader }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ visible: nextProps.showHeader })
  }

  render () {
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' direction='top' visible={visible} inverted>
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as={Link} to='/counter'>Counter</Menu.Item>
            <Menu.Item as={Link} to='/reddits'>Reddits</Menu.Item>
            <Menu.Item as={Link} to='/chart'>Charts</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              { this.props.children }
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default HeadedContainer
