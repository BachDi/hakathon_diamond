import { HStack, Text, VStack } from '@chakra-ui/react'
import Header from 'components/Header'
import { observer } from 'mobx-react'
import React from 'react'
import ItemDetail from './components/ItemDetail'

const OwnedPage = () => {
  const greenDiamond = {
    image: 'green-diamond.svg',
    name: '0.30 Carat Round diamond',
    code: 'a91424d65a1d56a1qe36d439487',
    giaCertificate: 'RBPUIFSDNNNHFWP',
    minBid: 0.2,
    myBid: 0.2,
    purchaseOn: 'Dec 4, 2019 - 21:42'
  }
  const redDiamond = {
    image: 'red-diamond.svg',
    name: '0.30 Carat Round diamond',
    code: 'a91424d65a1d56a1qe36d439487',
    giaCertificate: 'RBPUIFSDNNNHFWP',
    minBid: 0.2,
    myBid: 0.2,
    purchaseOn: 'Dec 30, 2019 - 05:18'
  }
  const blueDiamond = {
    image: 'blue-diamond.svg',
    name: '0.30 Carat Round diamond',
    code: 'a91424d65a1d56a1qe36d439487',
    giaCertificate: 'RBPUIFSDNNNHFWP',
    minBid: 0.2,
    myBid: 0.2,
    purchaseOn: 'Mar 20, 2019 - 23:14'
  }

  const items = [greenDiamond, blueDiamond, redDiamond]

  return (
    <VStack bg="background.blue.900" h="100vh" w="100vw" p="40px 165px">
      <Header />
      <HStack w="100%">
        <Text fontSize="32px" lineHeight="48px" fontWeight="600" color="text.primary">
          My diamonds
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
            My bid
          </Text>
        </HStack>
        <Text fontSize="14px" lineHeight="21px" fontWeight="700" color="text.primary" w="196px">
          Purchased on
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
          myBid={item.myBid}
          purchaseOn={item.purchaseOn}
        />
      ))}
    </VStack>
  )
}

export default observer(OwnedPage)
