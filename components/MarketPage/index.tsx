import { Box, Button, Grid, HStack, Text, VStack } from '@chakra-ui/react'
import Icon from 'components/Icon'
import { MainStateEnum } from 'constants/enum'
import React, { useState } from 'react'
import ItemBox from './components/ItemBox'
const homeBackground: string = '/assets/background.png'

const MarketPage = () => {
  const playerName = 'John Doe'
  const playerId = '3a14dqw1e949e1q6x4eq1da6qew'
  const [formState, setFormState] = useState(MainStateEnum.INSUFFICIENT)

  return (
    <>
      <Box
        bg={`url(${homeBackground})`}
        backgroundRepeat="no-repeat"
        height="100vh"
        backgroundSize="cover"
        width="100%"
        p="60px 165px"
      >
        <Box>
          <HStack mb="20px" justifyContent="space-between">
            <Text fontSize="32px" lineHeight="48px" fontWeight="600" color="text.secondary">
              Marketplace
            </Text>
            <Button
              fontSize="16px"
              lineHeight="24px"
              color="text.secondary"
              bg="background.blue.600"
              letterSpacing="0.02em"
              fontWeight="500"
              _hover={{ background: 'blue.900' }}
              height="56px"
              p="16px 32px"
              borderRadius="12px"
            >
              <HStack>
                <Icon iconName="iconoir.svg" size={24} />
                <Text>TO FISHING SPOT!</Text>
              </HStack>
            </Button>
          </HStack>
          <HStack gap={5.5}>
            <VStack gap={2} alignSelf="start">
              <Button
                fontSize="12px"
                lineHeight="18px"
                color="text.blue.600"
                fontWeight="600"
                bg="background.white.200"
                border="1px solid #1979B9"
                borderRadius="12px"
                w="160px"
                h="42px"
                p="12px 16px"
                justifyContent="flex-start"
                _hover={{ background: 'background.white.500' }}
              >
                <HStack>
                  <Icon iconName="shopping-bag.svg" size={16} />
                  <Text>Fishing rods</Text>
                </HStack>
              </Button>
              <Button
                fontSize="12px"
                lineHeight="18px"
                color="text.black"
                fontWeight="600"
                bg="background.white.200"
                border="1px solid rgba(255, 255, 255, 0.2)"
                borderRadius="12px"
                w="160px"
                h="42px"
                p="12px 16px"
                justifyContent="flex-start"
                _hover={{ background: 'background.white.500' }}
              >
                <HStack>
                  <Icon iconName="storefront-grey.svg" size={16} />
                  <Text>Baits</Text>
                </HStack>
              </Button>
              <Button
                fontSize="12px"
                lineHeight="18px"
                color="text.black"
                fontWeight="600"
                bg="background.white.200"
                border="1px solid rgba(255, 255, 255, 0.2)"
                borderRadius="12px"
                w="160px"
                h="42px"
                p="12px 16px"
                justifyContent="flex-start"
                _hover={{ background: 'background.white.500' }}
              >
                <HStack>
                  <Icon iconName="storefront-grey.svg" size={16} />
                  <Text>Fishes</Text>
                </HStack>
              </Button>
            </VStack>
            <VStack>
              <Grid gridTemplateColumns="auto auto" gap={6}>
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
                <ItemBox />
              </Grid>
            </VStack>
          </HStack>
        </Box>
      </Box>
    </>
  )
}

export default MarketPage
