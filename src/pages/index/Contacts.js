import React from 'react'
import { Box, Flex } from 'grid-styled'

import { H2 } from 'ui/title/index'
import Text from 'ui/text/Text'
import Map from 'ui/map/Map'

const Contacts = () => {
  return (
    <Flex justifyContent={'center'}>
      <Box width={1230} css={{ height: '752px' }}>
        <Box mt={62} />
        <H2 yellow>
          Контакты
        </H2>
        <Flex mt={90} justifyContent={'space-between'}>
          <Box>
            <Text>
              Адрес:<br /> ул. Диктатуры пролетариата, 12
            </Text>
            <Box mt={30} />
            <Text>
              Заказ столика<br /> +7 (391) 999-95-95
            </Text>
            <Box mt={30} />
            <Text>
              Электронная почта:<br /> sharkburger@bk.ru
            </Text>
            <Box mt={30} />
            <Text>
              Режим работы:<br /> с 10:00 до 02:00
            </Text>
          </Box>
          <Map />
        </Flex>
      </Box>
    </Flex>
  )
}

export default Contacts