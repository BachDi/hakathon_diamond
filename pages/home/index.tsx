import { HStack } from '@chakra-ui/react'
import MainPage from 'components/MainPage'
import { observer } from 'mobx-react'
import React from 'react'

const Home = () => {
  return (
    <HStack paddingRight={2}>
      <MainPage />
    </HStack>
  )
}

export default observer(Home)
