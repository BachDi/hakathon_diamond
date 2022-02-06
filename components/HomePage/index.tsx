import { HStack, Text, VStack } from '@chakra-ui/react'
import Header from 'components/Header'
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
    minBid: 0.2,
    highestBid: 0.2,
    timeLeft: '2d 15h 33m 49s'
  }
  const redDiamond = {
    image: 'red-diamond.svg',
    name: '0.30 Carat Round diamond',
    code: 'a91424d...d439487',
    giaCertificate: 'RBPUIFSDNNNHFWP',
    minBid: 0.2,
    highestBid: 0.2,
    timeLeft: '2d 15h 33m 49s'
  }

  const items = [greenDiamond, redDiamond, greenDiamond]

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
      {items.map((item, index) => (
        <ItemDetail
          key={index}
          image={item.image}
          name={item.name}
          code={item.code}
          giaCertificate={item.giaCertificate}
          minBid={item.minBid}
          highestBid={item.highestBid}
          timeLeft={item.timeLeft}
        />
      ))}
    </VStack>
  )
}

export default observer(HomePage)
