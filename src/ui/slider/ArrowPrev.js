import React from 'react'
import styled from 'styled-components'
import arrow from 'img/arrow-prev.png'

const Arrow = styled.div`
width: 30px;
height: 55px;
position: relative;
background-image: url(${arrow});
background-repeat: no-repeat;
background-size: cover;
transition: 0.1s;
&:hover {
  cursor: pointer;
  transform: scale(1.1);
}
`
const ArrowPrev = () => {
  return <Arrow />
}

export default ArrowPrev