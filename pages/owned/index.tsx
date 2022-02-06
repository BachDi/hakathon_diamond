import { HStack } from '@chakra-ui/react'
import OwnedPage from 'components/OwnedPage'
import { observer } from 'mobx-react'
import React from 'react'

const Owned = () => {
  return (
    <HStack paddingRight={2}>
      <OwnedPage />
    </HStack>
  )
}

export default observer(Owned)
