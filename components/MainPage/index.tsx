import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import Icon from 'components/Icon'
import { MainStateEnum } from 'constants/enum'
import React, { useState } from 'react'
import Available from './components/Available'
import Insufficient from './components/Insufficient'
const homeBackground: string = '/assets/background-fishing.png'

const MainPage = () => {
  const playerName = 'John Doe'
  const playerId = '3a14dqw1e949e1q6x4eq1da6qew'
  const [formState, setFormState] = useState(MainStateEnum.AVAILABLE)

  return (
    <>
      <Box
        bg={`url(${homeBackground})`}
        backgroundRepeat="no-repeat"
        height="100vh"
        backgroundSize="contain"
        width="80%"
      >
        <Box mt="163px" ml="165px">
          <HStack mb="20px">
            <Icon iconName="carbon_fish-multiple.svg" size={48} />
            <Text fontSize="32px" lineHeight="48px" fontWeight="600" color="text.primary">
              NFISH
            </Text>
          </HStack>

          <Flex gap="12px">
            <Text fontSize="32px" lineHeight="48px" fontWeight="600" color="text.primary">
              Hi,
            </Text>
            <Text fontSize="32px" lineHeight="48px" fontWeight="600" color="text.blue.600">
              {playerName}!
            </Text>
          </Flex>
          <Box w="300px" mb="40px" mt={3}>
            <Text fontSize="12px" lineHeight="18px" color="text.primary" mb={2}>
              Player ID: {playerId}
            </Text>
            <Text fontSize="12px" lineHeight="18px" fontWeight="500" textDecoration="underline" color="text.primary">
              Log out
            </Text>
          </Box>
          <HStack gap={2}>
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
                <Text>START</Text>
              </HStack>
            </Button>
            <Button
              fontSize="16px"
              lineHeight="24px"
              color="text.blue.900"
              bg="background.blue.100"
              letterSpacing="0.02em"
              fontWeight="500"
              _hover={{ background: 'background.primary' }}
              height="56px"
              p="16px 32px"
              border="1px solid #1979B9"
              borderRadius="12px"
            >
              <HStack>
                <Icon iconName="storefront-light.svg" size={24} />
                <Text>MARKET</Text>
              </HStack>
            </Button>
          </HStack>
        </Box>
      </Box>
      <VStack w="360px" bg="background.secondary" p={10} m={2} borderRadius="16px" gap={6}>
        {formState === MainStateEnum.INSUFFICIENT && <Insufficient />}
        {formState === MainStateEnum.AVAILABLE && <Available />}
      </VStack>
    </>
  )
}

export default MainPage
