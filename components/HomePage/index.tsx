import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import Icon from 'components/Icon'
import { HomeStateEnum } from 'constants/enum'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import ItemDetail from './components/ItemDetail'

const HomePage = () => {
  const [formState, setFormState] = useState(HomeStateEnum.LOG_IN)
  const greenDiamond = {
    image: 'green-diamond.svg',
    name: '0.30 Carat Round diamond',
    code: 'a91424d...d439487',
    giaCertificate: 'RBPUIFSDNNNHFWP',
    minBid: '0.2 ETH',
    highestBid: '0.2 ETH',
    timeLeft: '2d 15h 33m 49s'
  }
  const redDiamond = {
    image: 'red-diamond.svg',
    name: '0.30 Carat Round diamond',
    code: 'a91424d...d439487',
    giaCertificate: 'RBPUIFSDNNNHFWP',
    minBid: '0.2 ETH',
    highestBid: '0.2 ETH',
    timeLeft: '2d 15h 33m 49s'
  }

  return (
    <VStack bg="background.blue.900" h="100vh" p="40px 165px">
      <HStack justifyContent="space-between" w="100%">
        <VStack>
          <HStack gap={3}>
            <Icon iconName="logo.svg" size={70} />
            <Icon iconName="DIAU.svg" size={88} />
          </HStack>
        </VStack>
        <VStack>
          <HStack gap={8}>
            <HStack>
              <Button
                bg="background.blue.700"
                color="text.primary"
                _hover={{ bg: 'background.blue.600' }}
                fontSize="19px"
                lineHeight="29px"
                fontWeight="600"
                p="12px 40px"
                borderRadius="12px"
              >
                On sale
              </Button>
              <Button
                bg="background.blue.900"
                color="text.grey"
                _hover={{ bg: 'background.grey' }}
                fontSize="19px"
                lineHeight="29px"
                fontWeight="600"
                p="12px 40px"
                borderRadius="12px"
              >
                My bid
              </Button>
              <Button
                bg="background.blue.900"
                color="text.grey"
                _hover={{ bg: 'background.grey' }}
                fontSize="19px"
                lineHeight="29px"
                fontWeight="600"
                p="12px 40px"
                borderRadius="12px"
              >
                Owned
              </Button>
            </HStack>
            <HStack>
              <Button
                fontSize="12px"
                lineHeight="18px"
                bg="background.blue.600"
                fontWeight="normal"
                _hover={{ bg: 'background.blue.700' }}
                color="text.primary"
                p="8px 16px"
                borderRadius="12px"
              >
                <HStack gap={2.5}>
                  <Text>Connect your wallet</Text>
                  <Icon iconName="wallet-white.svg" size={24} />
                </HStack>
              </Button>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
      <HStack w="100%">
        <Text fontSize="32px" lineHeight="48px" fontWeight="600" color="text.primary">
          Diamond auction
        </Text>
      </HStack>
      <HStack w="100%">
        <Text fontSize="14px" lineHeight="21px" fontWeight="700" color="text.primary" w="370px" p="8px 24px">
          Details
        </Text>
        <HStack w="400px" paddingInline={10}>
          <Text fontSize="14px" lineHeight="21px" fontWeight="700" color="text.primary" w="160px" textAlign="center">
            Min bid
          </Text>
          <Text fontSize="14px" lineHeight="21px" fontWeight="700" color="text.primary" w="160px" textAlign="center">
            Highest bid
          </Text>
        </HStack>
        <Text fontSize="14px" lineHeight="21px" fontWeight="700" color="text.primary" w="196px">
          Available
        </Text>
      </HStack>
      <ItemDetail
        image={greenDiamond.image}
        name={greenDiamond.name}
        code={greenDiamond.code}
        giaCertificate={greenDiamond.giaCertificate}
        minBid={greenDiamond.minBid}
        highestBid={greenDiamond.highestBid}
        timeLeft={greenDiamond.timeLeft}
      />
      <ItemDetail
        image={greenDiamond.image}
        name={greenDiamond.name}
        code={greenDiamond.code}
        giaCertificate={greenDiamond.giaCertificate}
        minBid={greenDiamond.minBid}
        highestBid={greenDiamond.highestBid}
        timeLeft={greenDiamond.timeLeft}
      />
      <ItemDetail
        image={redDiamond.image}
        name={redDiamond.name}
        code={redDiamond.code}
        giaCertificate={redDiamond.giaCertificate}
        minBid={redDiamond.minBid}
        highestBid={redDiamond.highestBid}
        timeLeft={redDiamond.timeLeft}
      />
    </VStack>
  )
}

export default observer(HomePage)
