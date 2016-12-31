import React from 'react'

import SimpleLineChart from '../components/SimpleLineChart'

class ChartContainer extends React.Component {
  constructor () {
    super()
    this.data = [
      { name: 'Page A', uv: 1130, pv: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398 },
      { name: 'Page C', uv: 2000, pv: 9800 },
      { name: 'Page D', uv: 2780, pv: 3908 },
      { name: 'Page E', uv: 1890, pv: 4800 },
      { name: 'Page F', uv: 2390, pv: 3800 },
      { name: 'Page G', uv: 3490, pv: 4300 }
    ]
  }

  componentWillMount () {
  }

  componentDidMount () {
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
    return (
      <div>
        <SimpleLineChart data={this.data} />
      </div>
    )
  }
}

export default ChartContainer
