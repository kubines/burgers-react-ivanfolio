import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Logo from 'ui/logo/Logo'
import Soc from 'ui/soc/Soc'
import Menu from 'ui/menu/Menu'
import Text from 'ui/text/Text'

const Foot = styled.footer`
width: 1230px;
height: 130px;
display: flex;
margin: 0 auto;
align-items: center;
justify-content: space-between;
;`

export default class Footer extends Component {
  render() {
    return (
      <Flex bg='#363636;'>
        <Foot>
          <Logo />
          <Box width={570}>
            <Soc />
            <Menu small={1} />
          </Box>
          <Box mt={80}>
            <Text xsmall white>
              Разработано студией Pattern
            </Text>
          </Box>
        </Foot>
      </Flex>
    )
  }
}