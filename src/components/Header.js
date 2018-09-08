import React from 'react'

import { Flex, Box } from 'grid-styled'

import Logo from 'ui/logo/Logo'
import Menu from 'ui/menu/Menu'
import Text from 'ui/text/Text'

export default class Header extends React.Component {
  render() {
    return (
      <Flex 
        bg='#f13239'
        justifyContent='center'
      >
        <Box 
          width={1230}
          css={{
            display: 'flex',
            height: '130px',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}
          >
          <Logo />
          <Box w={180}>
            <Text small white>
              Заказ столика +7 (391) 999-95-95
            </Text>
            <Box pt={10} />
            <Text small white>
              Режим работы: с 10:00 до 02:00
            </Text>
          </Box>
          <Menu />
        </Box>
      </Flex>
    )
  }
}
