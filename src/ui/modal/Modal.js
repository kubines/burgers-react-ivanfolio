import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Box } from 'grid-styled'

const fadeIn = keyframes`
from {
  opacity : 0;
  transform: scale(0.9);
}
to {
  opacity: 1;
  transform: scale(1);
}
`
const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`

const show = keyframes`
0% {
  opacity: 0;
}
90% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

const hide = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`

const Img = styled.img`
z-index: 100;
animation: ${props => !props.visible ? fadeIn : fadeOut} 0.3s ease;
`
const Close = styled.span`
display: block;
position: relative;
width: 30px;
height: 30px;
margin-left: calc(100% - 21px);
top: 32px;
cursor: pointer;
&:before, :after {
  content: "";
  display: block;
  position: relative;
  background-color: #fff;
  height: 30px;
  width: 5px;
  animation: ${props => !props.visible ? show : hide} 0.3s ease;
}
&:before {
  transform: rotate(-45deg);
}
&:after {
  transform: rotate(45deg);
  top: -30px;
}
&:hover {
  &:after,&:before {
    background-color: #fbb510;
  }
}
`

export default class Modal extends Component {
  render() {
    const Overlay = styled.div`
    display: flex;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    transition: visibility 0.3s ease-in-out;
    z-index: 100;
    body:not(&) { overflow: ${props => props.visible ? 'hidden' : 'auto'}; }
    `

    return (
      <Overlay visible={this.props.show}>
        <Box css={{position: 'relative', maxWidth: '90%', maxHeight: '90%',overflow: 'hidden'}}>
          <Close onClick={this.props.hide} />
          <Img src={this.props.img} />
        </Box> 
      </Overlay>
    )
  }
}
