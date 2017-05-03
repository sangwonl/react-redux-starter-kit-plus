import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  static defaultProps = {
  }

  static propTypes = {
    counter : PropTypes.number.isRequired,
    increment : PropTypes.func.isRequired,
    doubleAsync : PropTypes.func.isRequired
  }

  // constructor (props) {
  //   super(props)
  // }

  shouldComponentUpdate () {
    return true
  }

  render () {
    return (
      <div style={{ margin: '0 auto' }}>
        <h2>Counter: {this.props.counter}</h2>
        <button className='btn btn-default' onClick={this.props.increment}>
          Increment
        </button>
        {' '}
        <button className='btn btn-default' onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
      </div>
    )
  }
}

export default Counter
