import styled, { keyframes } from 'styled-components'

const fadeLeft = keyframes`
from {
  transform: scale(0.8);
  right: 100%;
}
to {
  transform: scale(1);
  right: 0;
}
`

const fadeRight = keyframes`
from {
  transform: scale(0.8);
  left: 100%;
  z-index: 100;
}
to {
  transform: scale(1);
  left: 0;
  z-index: 100;
}
`

const fadeOut = keyframes`
from {
  transform: scale(1);
  opacity: 1;
}
to {
  transform: scale(0.5);
  opacity: 0;
}
`

const Slide = styled.div`
opacity: ${props => (props.active ? '1' : '0')};
width: 100%;
height: 100%;
position: absolute;
background-color: #3333;
background-image: url(${props => props.slide});
background-size: cover;
background-position: center center;
animation: ${props => props.active ? (props.animation === 'left' ? fadeLeft : fadeRight): fadeOut} 0.4s ease-out;
transition: opacity 0.4s ease-out;
`

export default Slide