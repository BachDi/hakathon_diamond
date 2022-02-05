import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Success = () => {
  const walletId = '1q3we16a1q68qw16a4dq651e9q'
  const playerName = 'John Doe'
  const playerId = '3a14dqw1e949e1q6x4eq1da6qew'
  return (
    <>
      <Text fontSize="20px" lineHeight="30px" fontWeight="600" color="text.primary" w="145px" textAlign="center">
        Welcom back, {playerName}!
      </Text>
      <VStack mt="unset !important" mb="13px !important">
        <Text fontSize="12px" lineHeight="18px" color="text.primary">
          Wallet ID: {walletId}
        </Text>
        <Text fontSize="12px" lineHeight="18px" color="text.primary">
          Player ID: {playerId}
        </Text>
      </VStack>
      <Text fontSize="12px" lineHeight="18px" color="text.black">
        Auto dismissed in 5s
      </Text>
    </>
  )
}

export default Success
