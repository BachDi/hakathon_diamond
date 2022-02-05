import { HStack } from '@chakra-ui/react'
import GamePage from 'components/GamePage'
import { observer } from 'mobx-react'
import React from 'react'

const Game = () => {
  return (
    <HStack paddingRight={2}>
      <GamePage />
    </HStack>
  )
}

export default observer(Game)
