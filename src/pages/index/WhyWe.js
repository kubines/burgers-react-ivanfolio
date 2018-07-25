import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'

import { H2 } from 'ui/title/index'
import Text from 'ui/text/Text'
import icon1 from 'img/i-medal.png'
import icon2 from 'img/i-chat.png'
import icon3 from 'img/i-shaker.png'


export default class WhyWe extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          text: 'Мясо самого высокого качества',
          icon: icon1
        },
        {
          text: 'Отличный сервис',
          icon: icon2
        },
        {
          text: 'Эксклюзивная рецептура',
          icon: icon3
        }
      ]
    }
  }

  render() {
    const listItem = this.state.items.map((item, index) => {
      return (
        <Box key={index} w={320} css={{ textAlign: 'center' }}>
          <img src={item.icon} />
          <Box mt={45} />
          <Text>
            {item.text}
          </Text>
        </Box>
      )
    })
    return (
      <Flex justifyContent='center'>
        <Box margin={0} w={1170} css={{ height: '560px' }}>
          <H2 black small center>
            Почему мы ?
          </H2>
          <Box mt={70} w={1180} css={{ display: 'flex', justifyContent: 'space-between' }}>
            {listItem}
          </Box>
        </Box>
      </Flex>
    )
  }
}
