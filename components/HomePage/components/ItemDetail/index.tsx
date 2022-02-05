import { HStack, VStack, Text, Button } from '@chakra-ui/react'
import Icon from 'components/Icon'
import React from 'react'

const ItemDetail = () => {
  return (
    <HStack w="100%" bg="background.secondary" borderRadius="16px">
      <HStack w="370px" p="16px 24px">
        <VStack>
          <Icon iconName="green-diamond.svg" size={96} />
        </VStack>
        <VStack alignItems="flex-start">
          <Text fontSize="16px" lineHeight="24px" fontWeight="500" color="text.primary">
            0.30 Carat Round diamond
          </Text>
          <VStack alignItems="flex-start">
            <HStack>
              <Text w="96px" color="text.secondary" fontSize="12px" lineHeight="18px">
                Code:
              </Text>
              <Text color="text.secondary" fontSize="12px" lineHeight="18px">
                a91424d...d439487
              </Text>
            </HStack>
            <HStack>
              <Text w="96px" color="text.secondary" fontSize="12px" lineHeight="18px">
                GIA certificate:
              </Text>
              <Text color="text.secondary" fontSize="12px" lineHeight="18px">
                RBPUIFSDNNNHFWP
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
      <HStack w="400px" paddingInline={10}>
        <Text fontSize="12px" lineHeight="18px" fontWeight="500" color="text.primary" w="160px" textAlign="center">
          0.2 ETH
        </Text>
        <Text fontSize="12px" lineHeight="18px" fontWeight="500" color="text.primary" w="160px" textAlign="center">
          0.2 ETH
        </Text>
      </HStack>
      <Text fontSize="12px" lineHeight="18px" fontWeight="500" color="text.primary" w="196px">
        2d 15h 33m 49s
      </Text>
      <HStack>
        <VStack gap={2}>
          <Button
            fontSize="12px"
            lineHeight="18px"
            bg="background.blue.600"
            fontWeight="normal"
            _hover={{ bg: 'background.blue.700' }}
            color="text.primary"
            p="8px 16px"
            borderRadius="12px"
            w="120px"
            justifyContent="flex-start"
          >
            <HStack>
              <Icon iconName="auction-white.svg" size={16} />
              <Text>Place bid</Text>
            </HStack>
          </Button>
          <Button
            fontSize="12px"
            lineHeight="18px"
            bg="background.grey"
            fontWeight="normal"
            _hover={{ bg: 'background.blue.500' }}
            color="text.secondary"
            p="8px 16px"
            borderRadius="12px"
            w="120px"
            justifyContent="flex-start"
          >
            <HStack>
              <Icon iconName="history-white.svg" size={16} />
              <Text>History</Text>
            </HStack>
          </Button>
        </VStack>
      </HStack>
    </HStack>
  )
}
export default ItemDetail
