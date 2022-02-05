import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import Icon from 'components/Icon'
import React from 'react'

const Insufficient = () => {
  return (
    <>
      <Icon iconName="fishbone.svg" size={67} />
      <VStack>
        <Text fontSize="20px" lineHeight="30px" fontWeight="600" color="text.primary">
          Out of fishing tools!
        </Text>
        <Text fontSize="12px" lineHeight="18px" color="text.primary" w="280px" textAlign="center">
          Please buy some rods and baits on the marketplace to start fishing.
        </Text>
      </VStack>
      <HStack gap={2}>
        <Button
          fontSize="12px"
          lineHeight="18px"
          color="text.primary"
          bg="background.white.400"
          borderRadius="12px"
          w="75px"
          h="44px"
          _hover={{ background: 'background.primary' }}
        >
          Cancel
        </Button>
        <Button
          fontSize="12px"
          lineHeight="18px"
          color="text.secondary"
          fontWeight="600"
          bg="background.blue.600"
          borderRadius="12px"
          w="189px"
          h="44px"
          _hover={{ background: 'blue.900' }}
        >
          <HStack>
            <Icon iconName="storefront-white.svg" size={24} />
            <Text>TO THE MARKET!</Text>
          </HStack>
        </Button>
      </HStack>
    </>
  )
}

export default Insufficient
