import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin'

import './MuiLayout.scss'
import '../../styles/core.scss'

injectTapEventPlugin()

const MuiLayout = ({ children }) => (
  <MuiThemeProvider>
    <div className='layout-wrap'>
      <Header />
      <div className='layout-container'>
        {children}
      </div>
    </div>
  </MuiThemeProvider>
)

MuiLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default MuiLayout
