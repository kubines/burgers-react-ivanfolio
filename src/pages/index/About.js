import React, { Component } from 'react'
import styled from 'styled-components'
import { Box } from 'grid-styled'

import { H2 } from 'ui/title/index'
import Content from 'grid/Content'
import Text from 'ui/text/Text'
import bg from 'img/bg-about.png'
import Redline from 'ui/line/Redline'

const Layout = styled.div`
position: relative;
width: 100%;
height: 745px;
background-image: url(${bg});
background-repeat: no-repeat;
background-position: right bottom;
;`
export default class About extends Component {
  render() {
    return (
      <Layout>
        <Box css={{position: 'absolute', left: '0', top: '-13.5px'}}>
          <Redline />
        </Box>
        <Content>
          <Box pt={100}>
            <H2 yellow>
              О нас
            </H2>
          </Box>
          <Box mt={75} w={760}>
            <Text>
              Shark Burger открылся в 2018 году. В основе концепции идея о том, что простая еда может быть вкусной и желанной.
            </Text>
            <Box mt={40} />
            <Text>
              Shark Burger - это заведение нового поколения крафтовых бургерных, меню в котором существенно меньше и более специализированно – практически 50% предложений составляют бургеры. 
            </Text>
            <Box mt={40} />
            <Text>
              Все бургеры в заведении готовятся по авторским рецептам, разработанным нашими технологами. 
            </Text>
          </Box>
        </Content>
      </Layout>
    )
  }
}
