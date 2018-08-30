import React, { Component } from 'react'
import styled from 'styled-components'
import { Box } from 'grid-styled'

import Content from 'grid/Content'
import { H1 } from 'ui/title/index'
import Text from 'ui/text/Text'
import bg from 'img/bg-burger.png'

const Wrapper = styled.div`
width: 100%;
height: 720px;
background-image: url(${bg});
background-size: cover;
background-position: center right;
;`
const Line = styled.div` 
width: 336px;
height: 6px;
background-color: #fbb510;
;`
export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <Box pt={160}>
            <H1>
              Настоящие<br />бургеры
            </H1>
          </Box>
          <Box mt={38}>
            <Line />
          </Box>         
          <Box mt={40}>
            <Text white>
              по авторским рецептам<br />из 100% мраморной говядины
            </Text>
          </Box>
        </Content>
      </Wrapper>
    )
  }
}

