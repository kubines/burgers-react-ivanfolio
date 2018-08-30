import React from 'react'
import styled from 'styled-components'

import arrow from 'img/arrow-prev-white.png'

const Arrow = styled.div`
width: 30px;
height: 55px;
margin-right: 20px;
background-image: url(${arrow});
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