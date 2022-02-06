import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

interface ITrackHistoryProps {
  price: number
  tradeOn: string
  isLastItem?: boolean
}
const TrackHistory = (props: ITrackHistoryProps) => {
  const { price, tradeOn, isLastItem } = props
  return (
    <>
      <HStack p="4px 16px" h="34px" borderBottom={isLastItem ? 'unset' : '1px solid #E2E2E2'}>
        <Text fontSize="12px" lineHeight="18px" color="text.blue.100" flex="6">
          a91424d6a1dq91f3qweqd439487
        </Text>
        <Text fontSize="12px" lineHeight="18px" color="text.primary" flex="4" textAlign="center">
          {price} ETH
        </Text>
        <Text fontSize="12px" lineHeight="18px" color="text.primary" flex="3">
          {tradeOn}
        </Text>
      </HStack>
    </>
  )
}

export default TrackHistory
