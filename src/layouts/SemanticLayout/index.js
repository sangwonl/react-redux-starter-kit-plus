import React from 'react'

import HeadedContainer from '../../components/HeadedContainer'

import { Button } from 'semantic-ui-react'

import './styles.scss'

class SemanticLayout extends React.Component {
  constructor () {
    super()

    this.state = { showHeader: false }
  }

  toggleVisibility = () => {
    this.setState({ showHeader: !this.state.showHeader })
  }

  render () {
    return (
      <div className='layout-wrap'>
        <HeadedContainer showHeader={this.state.showHeader}>
          <Button onClick={this.toggleVisibility}>Show Header</Button>
          <div className='layout-container'>
            {this.props.children}
          </div>
        </HeadedContainer>
      </div>
    )
  }
}

SemanticLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default SemanticLayout
