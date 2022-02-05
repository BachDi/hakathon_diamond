import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import Icon from 'components/Icon'
import React from 'react'

const Available = () => {
  return (
    <>
      <Text fontSize="20px" lineHeight="30px" fontWeight="600" color="text.primary">
        Choose your tools to start
      </Text>
      <VStack>
        <HStack gap={6}>
          <VStack w="120px">
            <Text fontSize="12px" lineHeight="18px" fontWeight="600" color="text.primary">
              Fising rod
            </Text>
            <Text fontSize="12px" lineHeight="18px" color="text.green">
              Normal fishing rod
            </Text>
            <HStack bg="background.white.500" w="120px" h="120px" justifyContent="center" borderRadius="12px" gap="9px">
              <Icon iconName="normal-rod.svg" size={81} />
              <Icon iconName="fluent-add.svg" size={12} />
            </HStack>
            <Text fontSize="12px" lineHeight="18px" color="text.primary">
              Change
            </Text>
          </VStack>
          <VStack w="120px">
            <Text fontSize="12px" lineHeight="18px" fontWeight="600" color="text.primary">
              Bait
            </Text>
            <Text fontSize="12px" lineHeight="18px" color="text.green">
              Sardine
            </Text>
            <HStack bg="background.white.500" w="120px" h="120px" justifyContent="center" borderRadius="12px">
              <Icon iconName="blue-fish.svg" size={81} />
            </HStack>
            <Text fontSize="12px" lineHeight="18px" color="text.primary">
              Change
            </Text>
          </VStack>
        </HStack>
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
            <Icon iconName="iconoir.svg" size={24} />
            <Text>START</Text>
          </HStack>
        </Button>
      </HStack>
    </>
  )
}

export default Available
