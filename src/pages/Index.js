import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import Main from './index/Main'
import About from './index/About'
import WhyWe from './index/WhyWe'
import Menu from './index/Menu'
import Sale from './index/Sale'
import Interior from './index/Interior'
import Contacts from './index/Contacts'

export default class Index extends Component {
  render() {
    return ( 
      <div>
        <Main />
        <ScrollableAnchor id={'about'}>
          <About />
        </ScrollableAnchor>
        <WhyWe />
        <ScrollableAnchor id={'menu'}>
          <Menu />
        </ScrollableAnchor>
        <ScrollableAnchor id={'sale'}>
          <Sale />
        </ScrollableAnchor>
        <ScrollableAnchor id={'interior'}>
          <Interior />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contacts'}>
          <Contacts />
        </ScrollableAnchor>
      </div>
    )
  }
}
