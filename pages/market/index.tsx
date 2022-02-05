import { HStack } from '@chakra-ui/react'
import MarketPage from 'components/MarketPage'
import { observer } from 'mobx-react'
import React from 'react'

const Market = () => {
  return (
    <HStack paddingRight={2}>
      <MarketPage />
    </HStack>
  )
}

export default observer(Market)
