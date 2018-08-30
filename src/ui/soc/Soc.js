import React, { Component } from 'react';
import styled from 'styled-components'
import fb from 'img/icon-fb.png'
import vk from 'img/icon-vk.png'
import im from 'img/icon-insta.png'

const Icon = styled.img`
width: 35px;
height: 35px;
margin: 0 7px 17px 7px;
padding: 1px;
transition: 0.1s;
&:hover {
  transform: scale(1.1)
}
;`
const Nav = styled.div`
width: 154px;
margin: 0 auto;
;`
export default class Soc extends Component {
  constructor() {
    super();
    this.state = {
      icon: [
        fb, vk, im
      ]
    }
  }
  render() {
    const socLink = this.state.icon.map((item, index) => {
      return <a href='#' key={index}><Icon src={item} /></a>
    })
    return (
      <Nav>
        {socLink}
      </Nav>
    )
  }
}