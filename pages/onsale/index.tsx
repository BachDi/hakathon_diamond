import { HStack } from '@chakra-ui/react'
import HomePage from 'components/HomePage'
import { observer } from 'mobx-react'
import React from 'react'

const OnSale = () => {
  return (
    <HStack paddingRight={2}>
      <HomePage />
    </HStack>
  )
}

export default observer(OnSale)
