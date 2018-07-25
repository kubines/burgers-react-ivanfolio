import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'

const Img = styled.img`
width: 111px;
height: 111px;
;`
const Logo = () => {
    return (
      <Img src={logo} />
    )
}

export default Logo