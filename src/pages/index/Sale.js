import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'
import { H2 } from 'ui/title/index'
import Redline from 'ui/line/Redline'
import Slider from 'ui/slider/Slider'

export default class Sale extends Component {
  render() {
    return (
      <Flex justifyContent={'center'} css={{position: 'relative'}}>
        <Box css={{position: 'absolute', left: '0', top: '-13.5px'}}>
          <Redline />
        </Box>
        <Box width={1230} css={{ height: '837px'}}>
          <Box mt={85} mr={30}>
            <H2 red>
              Акции
            </H2>
          </Box>
          <Box mt={69} />
          <Slider />
        </Box>
      </Flex>
    )
  }
}
