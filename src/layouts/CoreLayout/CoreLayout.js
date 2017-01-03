import React from 'react'
import Header from '../../components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './CoreLayout.scss'
import '../../styles/core.scss'

const CoreLayout = ({ children }) => (
  <MuiThemeProvider>
    <div className='core-layout'>
      <Header />
      <div className='core-layout-container'>
        {children}
      </div>
    </div>
  </MuiThemeProvider>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
