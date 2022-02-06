import { HStack, VStack, Text, Button } from '@chakra-ui/react'
import Icon from 'components/Icon'
import PlacebidModal from 'components/PlacebidModal'
import ViewHistoryModal from 'components/ViewHistoryModal'
import React, { useState } from 'react'
import { shortenString } from 'utils/common'

interface IItemDetailProps {
  image: string
  name: string
  code: string
  giaCertificate: string
  minBid: number
  highestBid: number
  timeLeft: string
}
const ItemDetail = (props: IItemDetailProps) => {
  const { image, name, code, giaCertificate, minBid, highestBid, timeLeft } = props
  const [isOpenPlacebidModal, setIsOpenPlacebidModal] = useState(false)
  const [isOpenViewHistoryModal, setIsOpenViewHistoryModal] = useState(false)

  const userBalance = 123.456789
  const [amount, setAmount] = useState<number>(0)

  function openPlacebidModal() {
    setIsOpenPlacebidModal(true)
  }
  function closePlacebidModal() {
    setIsOpenPlacebidModal(false)
    setAmount(0)
  }
  function openViewHistoryModal() {
    setIsOpenViewHistoryModal(true)
  }
  function closeViewHistoryModal() {
    setIsOpenViewHistoryModal(false)
  }

  return (
    <HStack w="100%" bg="background.secondary" borderRadius="16px">
      <HStack w="370px" p="16px 24px" gap={4}>
        <VStack>
          <Icon iconName={image} size={96} />
        </VStack>
        <VStack alignItems="flex-start">
          <Text fontSize="16px" lineHeight="24px" fontWeight="500" color="text.primary">
            {name}
          </Text>
          <VStack alignItems="flex-start">
            <HStack>
              <Text w="96px" color="text.secondary" fontSize="12px" lineHeight="18px">
                Code:
              </Text>
              <Text color="text.secondary" fontSize="12px" lineHeight="18px">
                {shortenString(code, 14)}
              </Text>
            </HStack>
            <HStack>
              <Text w="96px" color="text.secondary" fontSize="12px" lineHeight="18px">
                GIA certificate:
              </Text>
              <Text color="text.secondary" fontSize="12px" lineHeight="18px">
                {giaCertificate}
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
      <HStack w="400px" paddingInline={10}>
        <Text fontSize="12px" lineHeight="18px" fontWeight="500" color="text.primary" w="160px" textAlign="center">
          {minBid} ETH
        </Text>
        <Text fontSize="12px" lineHeight="18px" fontWeight="500" color="text.primary" w="160px" textAlign="center">
          {highestBid} ETH
        </Text>
      </HStack>
      <Text fontSize="12px" lineHeight="18px" fontWeight="500" color="text.primary" w="196px">
        {timeLeft}
      </Text>
      <HStack>
        <VStack>
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
            onClick={openPlacebidModal}
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
            onClick={openViewHistoryModal}
          >
            <HStack>
              <Icon iconName="history-white.svg" size={16} />
              <Text>History</Text>
            </HStack>
          </Button>
        </VStack>
      </HStack>
      <PlacebidModal
        isOpen={isOpenPlacebidModal}
        closeModal={closePlacebidModal}
        minBid={minBid}
        userBalance={userBalance}
        amount={amount}
        setAmount={setAmount}
      />
      <ViewHistoryModal
        isOpen={isOpenViewHistoryModal}
        closeModal={closeViewHistoryModal}
        image={image}
        name={name}
        code={code}
        giaCertificate={giaCertificate}
      />
    </HStack>
  )
}
export default ItemDetail
