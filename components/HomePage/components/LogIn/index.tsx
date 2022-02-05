import { Button, Flex, Text, VStack } from '@chakra-ui/react'
import Icon from 'components/Icon'
import React from 'react'

const LogIn = () => {
  return (
    <>
      <VStack>
        <Text fontSize="20px" lineHeight="30px" fontWeight="600" color="text.primary">
          Not logged in
        </Text>
        <Text fontSize="12px" lineHeight="18px" color="text.primary">
          Connect your wallet to continue
        </Text>
      </VStack>
      <Flex w="120px" height="120px" justifyContent="center" bg="background.white.500" borderRadius="12px" mb={8}>
        <Icon iconName="metamask-icon.svg" size={60} />
      </Flex>
      <Button
        fontSize="12px"
        lineHeight="18px"
        color="text.primary"
        bg="background.white.400"
        borderRadius="12px"
        w="160px"
        _hover={{ background: 'background.primary' }}
      >
        Cancel
      </Button>
    </>
  )
}

export default LogIn
