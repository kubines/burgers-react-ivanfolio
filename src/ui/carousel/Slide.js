import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const outRight = keyframes`
from {
  left: 0;
}
to {
  left: 150%;
}
`

const fadeRight = keyframes`
from {
  right: 150%;
}
to {
  right: 0;
}
`
const outLeft = keyframes`
from {
  right: 0;
}
to {
  right: 150%;
}
`
const fadeLeft = keyframes`
from {
  left: 150%;
}
to {
  left: 0;
}
`

const Text = styled.p`
display: block;
font-family: Orpheus;
font-size: 70px;
font-weight: 700;
color: #fffffe;
opacity: 0;
transition: 0.3s;
z-index: 10;
${props => props.small && css`
font-size: 40px;
`}
`

const Img = styled.img` 
display: block;
position: absolute;
z-index: 1;
`

const Box = styled.div`
display: flex;
visibility: ${props => (props.active ? 'visible' : 'hidden')};
position: absolute;
width: 224px;
height: 245px;
flex-direction: column;
justify-content: center;
align-items: center;
border: 15px solid #ba2d45;
animation: ${props => props.active ? (props.animation === 'left' ? fadeLeft : fadeRight) : (props.animation === 'left' ? outLeft : outRight) } 0.2s ease-out;
transition: visibility 0.2s ease-out;
&:hover {
  border: 15px solid #c9910e;
}
&:hover ${Text} {
  opacity: 1;
}
&:hover ${Img} {
  filter: brightness(70%);
}
`

const Slide = (props) => {
  return <Box active={props.active} animation={props.animation}>
    <Img src={props.slide} />
    <Text>{props.name}</Text>
    <Text small>{props.price}</Text>
  </Box>
}

export default Slide