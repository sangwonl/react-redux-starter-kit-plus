import React from 'react'
import Header from '../../components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './MuiLayout.scss'
import '../../styles/core.scss'

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
  children : React.PropTypes.element.isRequired
}

export default MuiLayout
