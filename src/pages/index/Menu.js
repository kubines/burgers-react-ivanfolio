import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'

import { H2 } from 'ui/title/index'
import bg from 'img/bg-menu.png'
import Square from 'img/square.png'
import Carousel from 'ui/carousel/Carousel'

export default class Menu extends Component {
  render() {
    return (
      <Flex justifyContent={'center'} css={{position: 'relative', background: `url(${bg})`, backgroundSize: 'cover'}}>
        <Box css={{position: 'absolute', right: '0', bottom: '-250px'}} >
          <img src={Square} />
        </Box>
        <Box width={1230} css={{height: '850px'}}>
          <Box mt={79} ml={30} />
          <H2 yellow>
            Меню
          </H2>
          <Flex mt={61} css={{alignItems: 'center', flexDirection: 'column'}}>
            <H2 white small>
              Наши хиты:
            </H2>
            <Box mt={54} />
            <Carousel />
          </Flex>
        </Box>
      </Flex>
    )
  }
}
