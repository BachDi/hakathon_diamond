import { HStack, Text, VStack } from '@chakra-ui/react'
import Header from 'components/Header'
import { HomeStateEnum } from 'constants/enum'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import ItemDetail from './components/ItemDetail'

const OwnedPage = () => {
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
    <VStack bg="background.blue.900" h="100vh" w="100vw" p="40px 165px">
      <Header />
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

export default observer(OwnedPage)
