import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import Icon from 'components/Icon'
import { HomeStateEnum } from 'constants/enum'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import CreateAccount from './components/CreateAccount'
import LogIn from './components/LogIn'
import Success from './components/Success'
const homeBackground: string = '/assets/background-fishing.png'

const HomePage = () => {
  const [formState, setFormState] = useState(HomeStateEnum.LOG_IN)
  return (
    <HStack paddingRight={2}>
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
            <Text fontSize="52px" lineHeight="78px" fontWeight="600" color="text.primary">
              Play to
            </Text>
            <Text fontSize="52px" lineHeight="78px" fontWeight="600" color="text.blue.600">
              win!
            </Text>
          </Flex>
          <Box w="300px" mb="56px">
            <Text fontWeight="500" color="text.primary">
              Play, Invest, Exchange and Join the contests with high rewards!
            </Text>
          </Box>
          <Button
            fontSize="21px"
            lineHeight="32px"
            color="text.secondary"
            bg="background.blue.600"
            letterSpacing="0.02em"
            fontWeight="500"
            _hover={{ background: 'blue.900' }}
            height="64px"
            p="16px 32px"
            borderRadius="12px"
          >
            PLAY NOW!
          </Button>
        </Box>
      </Box>
      <VStack w="360px" bg="background.secondary" p={10} m={2} borderRadius="16px" gap={6}>
        {formState === HomeStateEnum.LOG_IN && <LogIn />}
        {formState === HomeStateEnum.CREATE_ACCOUNT && <CreateAccount />}
        {formState === HomeStateEnum.SUCCESS && <Success />}
      </VStack>
    </HStack>
  )
}

export default observer(HomePage)
