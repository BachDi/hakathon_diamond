import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  HStack,
  VStack,
  ModalCloseButton
} from '@chakra-ui/react'
import Icon from 'components/Icon'
import React from 'react'
import TrackHistory from './TrackHistory'

interface IViewHistoryModalProps {
  isOpen: boolean
  closeModal: () => void
  name: string
  code: string
  giaCertificate: string
  image: string
}

const ViewHistoryModal = (props: IViewHistoryModalProps) => {
  const { isOpen, closeModal, name, code, giaCertificate, image } = props
  const history = {
    soldPrice: 0.2,
    tradeOn: 'Dec 4, 2019 - 21:42'
  }
  const histories = [history, history, history, history]
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent bg="background.primary" p="24px 16px 16px" borderRadius="16px">
          <ModalHeader>
            <Text fontSize="20px" lineHeight="30px" fontWeight="600" color="text.primary" mb={4}>
              History tracing
            </Text>
            <HStack gap={4}>
              <VStack>
                <Icon iconName={image} size={96} />
              </VStack>
              <VStack alignItems="flex-start">
                <Text fontSize="16px" lineHeight="24px" fontWeight="500" color="text.primary">
                  {name}
                </Text>
                <VStack alignItems="flex-start">
                  <HStack>
                    <Text w="96px" color="text.primary" fontSize="12px" lineHeight="18px">
                      Code:
                    </Text>
                    <Text color="text.blue.100" fontSize="12px" lineHeight="18px">
                      {code}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text w="96px" color="text.primary" fontSize="12px" lineHeight="18px">
                      GIA certificate:
                    </Text>
                    <Text color="text.blue.100" fontSize="12px" lineHeight="18px">
                      {giaCertificate}
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </HStack>
          </ModalHeader>
          <ModalCloseButton color="text.primary" mt={6} mr={5} />
          <ModalBody pb={6}>
            <HStack bg="background.secondary" p="4px 16px" h="45px" borderRadius="12px">
              <Text fontSize="14px" lineHeight="21px" color="text.primary" fontWeight="bold" flex="6">
                Address
              </Text>
              <Text
                fontSize="14px"
                lineHeight="21px"
                color="text.primary"
                fontWeight="bold"
                flex="4"
                textAlign="center"
              >
                Sold price
              </Text>
              <Text fontSize="14px" lineHeight="21px" color="text.primary" fontWeight="bold" flex="3">
                Traded on
              </Text>
            </HStack>
            {/* <TrackHistory price={history.soldPrice} tradeOn={history.tradeOn} /> */}
            {histories.map((track, index) => (
              <TrackHistory
                key={index}
                price={track.soldPrice}
                tradeOn={track.tradeOn}
                isLastItem={histories.length === index + 1}
              />
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ViewHistoryModal
