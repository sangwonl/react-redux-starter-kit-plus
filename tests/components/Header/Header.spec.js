import React from 'react'
import { shallow } from 'enzyme'
import { AppBar, Tab } from 'material-ui'
import { Link } from 'react-router'
import Header from 'components/Header'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  it('Renders an AppBar on header with welcome title', () => {
    expect(_wrapper.contains(
      <AppBar
        title='React Redux Starter Kit (Plus)'
        iconClassNameRight='muidocs-icon-navigation-expand-more' />
    )).to.be.true
  })

  describe('Navigation links...', () => {
    it('Should render a Tab which has a Link to Home route', () => {
      expect(_wrapper.contains(
        <Tab label='Home' containerElement={<Link to='/' />} />
      )).to.be.true
    })

    it('Should render a Tab which has a Link to Counter route', () => {
      expect(_wrapper.contains(
        <Tab label='Counter' containerElement={<Link to='/counter' />} />
      )).to.be.true
    })
  })
})
