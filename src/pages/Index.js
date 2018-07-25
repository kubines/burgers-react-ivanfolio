import React, { Component } from 'react'
import Main from './index/Main'
import About from './index/About'
import WhyWe from './index/WhyWe'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Main />
        <About />
        <WhyWe />
      </div>
    )
  }
}
