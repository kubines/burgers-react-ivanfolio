import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import Logo from 'ui/logo/Logo'
import Menu from 'ui/menu/Menu'
import Text from 'ui/text/Text'

const Head = styled.div`
display: flex;
width: 1230px;
height: 130px;
margin: 0 auto;
justify-content: space-between;
align-items: center;
;`

export default class Header extends Component {
  render() {
    return (
      <Flex bg='#f13239'>
        <Head>
          <Logo />
          <Box w={180} h={80}>
            <Text small white>
              Заказ столика +7 (391) 999-95-95
            </Text>
            <Box pt={10} />
            <Text small white>
              Режим работы: с 10:00 до 02:00
            </Text>
          </Box>
          <Menu />
        </Head>
      </Flex>
    )
  }
}
