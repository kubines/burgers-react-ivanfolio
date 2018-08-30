import React, { Component } from 'react'
import { Box, Flex } from 'grid-styled'

import { H2 } from 'ui/title/index'
import bg from 'img/bg-menu.png'
import Gallery from 'ui/gallery/Gallery'
import Redline from 'ui/line/Redline'

export default class Interior extends Component {
  render() {
    return (
      <Flex justifyContent={'center'} css={{background: `url(${bg}) no-repeat`, position: 'relative'}}>
        <Box css={{position: 'absolute', right: '0', top: '-13.5px'}}>
          <Redline />
        </Box>
        <Box width={1230} css={{height: '850px'}}>
          <Box mt={84} />
          <H2>
            Интерьер
          </H2>
          <Gallery />
        </Box>
        <Box css={{position: 'absolute', left: '0', bottom: '-13.5px'}}>
          <Redline />
        </Box>
      </Flex>
    )
  }
}
