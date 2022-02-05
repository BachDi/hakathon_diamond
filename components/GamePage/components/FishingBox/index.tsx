import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import Icon from 'components/Icon'
import React from 'react'

const FishingBox = () => {
  const fishInfomation = {
    id: '#123456',
    size: '30cm',
    weight: '1.5kg',
    code: 'a91424d65a1d56a1qe36d439487'
  }
  return (
    <>
      <Text fontSize="20px" lineHeight="30px" fontWeight="600" color="text.primary">
        Caught a fish!
      </Text>
      <VStack>
        <HStack gap={2}>
          <VStack w="120px">
            <HStack bg="background.white.500" w="120px" h="120px" justifyContent="center" borderRadius="12px" gap="9px">
              <Icon iconName="orange-fish.svg" size={81} />
            </HStack>
          </VStack>
          <VStack alignItems="flex-start" w="100%">
            <Text fontSize="16px" lineHeight="24px" fontWeight="500" color="text.primary">
              Cat fish {fishInfomation.id}
            </Text>
            <HStack>
              <VStack>
                <Text w="56px" fontSize="12px" lineHeight="18px" color="text.primary">
                  Size:
                </Text>
              </VStack>
              <VStack>
                <Text w="138px" fontSize="12px" lineHeight="18px" color="text.primary">
                  {fishInfomation.size}
                </Text>
              </VStack>
            </HStack>
            <HStack>
              <VStack>
                <Text w="56px" fontSize="12px" lineHeight="18px" color="text.primary">
                  Weight:
                </Text>
              </VStack>
              <VStack>
                <Text w="138px" fontSize="12px" lineHeight="18px" color="text.primary">
                  {fishInfomation.weight}
                </Text>
              </VStack>
            </HStack>
            <HStack>
              <VStack alignSelf="flex-start">
                <Text w="56px" fontSize="12px" lineHeight="18px" color="text.primary">
                  Code:
                </Text>
              </VStack>
              <VStack>
                <Text w="138px" fontSize="12px" lineHeight="18px" color="text.blue.600">
                  {fishInfomation.code}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
      <HStack gap={2}>
        <Button
          fontSize="16px"
          lineHeight="24px"
          color="text.primary"
          bg="background.white.400"
          borderRadius="12px"
          h="56px"
          _hover={{ background: 'background.primary' }}
        >
          <HStack>
            <Icon iconName="iconoir-black.svg" size={24} />
            <Text>BACK</Text>
          </HStack>
        </Button>
        <Button
          fontSize="16px"
          lineHeight="24px"
          color="text.secondary"
          fontWeight="500"
          bg="background.blue.600"
          borderRadius="12px"
          h="56px"
          _hover={{ background: 'blue.900' }}
        >
          <HStack>
            <Icon iconName="storefront-white.svg" size={24} />
            <Text>SELL ON MARKET</Text>
          </HStack>
        </Button>
      </HStack>
    </>
  )
}

export default FishingBox
