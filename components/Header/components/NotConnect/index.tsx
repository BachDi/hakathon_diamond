import { Button, HStack, Text } from '@chakra-ui/react'
import Icon from 'components/Icon'
import React from 'react'

const NotConnect = () => {
  return (
    <Button
      fontSize="12px"
      lineHeight="18px"
      bg="background.blue.600"
      fontWeight="normal"
      _hover={{ bg: 'background.blue.700' }}
      color="text.primary"
      p="8px 16px"
      borderRadius="12px"
    >
      <HStack gap={2.5}>
        <Text>Connect your wallet</Text>
        <Icon iconName="wallet-white.svg" size={24} />
      </HStack>
    </Button>
  )
}

export default NotConnect
