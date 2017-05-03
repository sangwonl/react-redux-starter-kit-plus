import React from 'react'
import PropTypes from 'prop-types'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const SimpleLineChart = props => (
  <LineChart data={props.data}
    width={600}
    height={300}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray='3 3' />
    <XAxis dataKey='name' />
    <YAxis />
    <Legend verticalAlign='top' />
    <Tooltip />
    <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 2 }} />
    <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
  </LineChart>
)

SimpleLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    uv: PropTypes.number,
    pv: PropTypes.number
  }))
}

export default SimpleLineChart
