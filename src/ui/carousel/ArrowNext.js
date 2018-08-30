import React from 'react'
import styled from 'styled-components'

import arrow from 'img/arrow-next-white.png'

const Arrow = styled.div`
width: 30px;
height: 55px;
margin-left: 10px;
background-image: url(${arrow});
transition: 0.1s;
&:hover {
  cursor: pointer;
  transform: scale(1.1);
}
`

const ArrowNext = () => {
  return <Arrow />
}

export default ArrowNext