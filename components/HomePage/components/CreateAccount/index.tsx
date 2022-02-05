import { Button, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CreateAccount = () => {
  const walletId = '1q3we16a1q68qw16a4dq651e9q'
  return (
    <>
      <VStack>
        <Text fontSize="20px" lineHeight="30px" fontWeight="600" color="text.primary">
          Choose a name
        </Text>
        <Text fontSize="12px" lineHeight="18px" color="text.primary">
          Wallet ID: {walletId}
        </Text>
      </VStack>
      <Input
        bg="background.black"
        borderRadius="12px"
        placeholder="Your unique name"
        fontSize="12px"
        lineHeight="18px"
        color="text.black"
      />
      <Button
        fontSize="12px"
        lineHeight="18px"
        color="text.secondary"
        fontWeight="600"
        bg="background.blue.600"
        borderRadius="12px"
        w="144px"
        h="44px"
        _hover={{ background: 'blue.900' }}
      >
        SUBMIT
      </Button>
    </>
  )
}

export default CreateAccount
