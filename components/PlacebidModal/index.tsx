import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Input,
  HStack,
  VStack
} from '@chakra-ui/react'
import React from 'react'

interface IPlacebidModalProps {
  isOpen: boolean
  closeModal: () => void
  minBid: number
  userBalance: number
  amount: number
  setAmount: (amount: number) => void
}

const PlacebidModal = (props: IPlacebidModalProps) => {
  const { isOpen, closeModal, minBid, userBalance, amount, setAmount } = props
  // const [amount, setAmount] = useState<number>(0)
  const serviceFee = 0.01
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={closeModal} size="sm">
        <ModalOverlay />
        <ModalContent bg="background.primary" p="24px 16px 16px" borderRadius="16px">
          <ModalHeader>
            <Text fontSize="20px" lineHeight="30px" fontWeight="600" color="text.primary">
              Place a bid
            </Text>
            <Text fontSize="12px" lineHeight="18px" fontWeight="600" color="text.primary">
              You must bid at least {minBid} ETH
            </Text>
          </ModalHeader>
          <ModalBody pb={6}>
            <Input
              bg="background.secondary"
              borderRadius="12px"
              color="text.primary"
              fontSize="12px"
              lineHeight="18px"
              p="8px 16px"
              h="48px"
              border="unset"
              mb={4}
              mt={2}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />

            <VStack gap={1}>
              <HStack justifyContent="space-between" w="100%">
                <Text fontSize="12px" lineHeight="18px" color="text.primary">
                  Your balance
                </Text>
                <Text fontSize="12px" lineHeight="18px" color="text.primary" fontWeight="600">
                  {userBalance} ETH
                </Text>
              </HStack>
              <HStack justifyContent="space-between" w="100%">
                <Text fontSize="12px" lineHeight="18px" color="text.primary">
                  Service fee
                </Text>
                <Text fontSize="12px" lineHeight="18px" color="text.primary" fontWeight="600">
                  {serviceFee} ETH
                </Text>
              </HStack>
              <HStack justifyContent="space-between" w="100%">
                <Text fontSize="12px" lineHeight="18px" color="text.primary">
                  Total bid amount
                </Text>
                <Text fontSize="12px" lineHeight="18px" color="text.primary" fontWeight="600">
                  {(minBid * amount + serviceFee).toFixed(2)} ETH
                </Text>
              </HStack>
            </VStack>

            <HStack mt={8}>
              <Button
                bg="background.secondary"
                borderRadius="12px"
                color="text.primary"
                fontSize="12px"
                lineHeight="18px"
                p="8px 20px"
                h="44px"
                _hover={{ bg: 'background.blue.700' }}
                onClick={closeModal}
                mr={2}
                flex="1"
              >
                Cancel
              </Button>
              <Button
                bg="background.blue.600"
                borderRadius="12px"
                color="text.secondary"
                fontSize="12px"
                lineHeight="18px"
                p="8px 20px"
                h="44px"
                _hover={{ bg: 'background.blue.700' }}
                flex="2"
              >
                Place your bid
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PlacebidModal
