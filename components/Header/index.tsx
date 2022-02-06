import { Button, HStack, VStack } from '@chakra-ui/react'
import Icon from 'components/Icon'
import { useRouter } from 'next/router'
import Connected from './components/Connected'
import NotConnect from './components/NotConnect'

const Header = () => {
  const router = useRouter()
  const isOwnedPage = router.pathname === '/owned'
  return (
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
          <HStack> {isOwnedPage ? <Connected /> : <NotConnect />}</HStack>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default Header
