import { Button, HStack, VStack, Text } from '@chakra-ui/react'
import Icon from 'components/Icon'
import React from 'react'

const ItemBox = () => {
  const itemName = 'Normal fishing rod'
  const itemDescription = 'Just an average fishing rod that helps you catch common fishes.'
  const itemPrice = '9.99$'
  return (
    <HStack h="168px" bg="background.secondary" borderRadius="16px" p={6}>
      <VStack bg="background.white.500" w="120px" h="120px" justifyContent="center" borderRadius="12px" gap="9px">
        <Icon iconName="normal-rod.svg" size={81} />
      </VStack>
      <VStack h="120px" justifyContent="space-between">
        <VStack alignItems="flex-start">
          <Text fontSize="16px" lineHeight="24px" color="text.primary" fontWeight="500">
            {itemName}
          </Text>
          <Text fontSize="12px" lineHeight="18px" color="text.primary">
            {itemDescription}
          </Text>
        </VStack>
        <Button
          fontSize="12px"
          lineHeight="18px"
          color="text.secondary"
          fontWeight="500"
          bg="background.blue.600"
          borderRadius="12px"
          p="8px 16px"
          alignSelf="end"
          _hover={{ background: 'blue.900' }}
        >
          <HStack>
            <Icon iconName="shopping-bag-white.svg" size={16} />
            <Text>{itemPrice}</Text>
          </HStack>
        </Button>
      </VStack>
    </HStack>
  )
}

export default ItemBox
