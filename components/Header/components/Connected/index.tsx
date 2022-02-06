import { Button, HStack, Text } from '@chakra-ui/react'
import Icon from 'components/Icon'
import React from 'react'

const Connected = () => {
  const walletId = '353ge2U....jodyucY'
  return (
    <Button
      fontSize="12px"
      lineHeight="18px"
      bg="background.blue.500"
      fontWeight="normal"
      _hover={{ bg: 'background.blue.600' }}
      color="text.primary"
      p="8px 16px"
      borderRadius="12px"
    >
      <HStack gap={2.5}>
        <Text>{walletId}</Text>
        <Icon iconName="metamask-icon.svg" size={25} />
      </HStack>
    </Button>
  )
}

export default Connected
