import { HStack, VStack } from '@chakra-ui/react'
import Icon from 'components/Icon'
import { useRouter } from 'next/router'
import routes from 'routes'
import Connected from './components/Connected'
import NavButton from './components/NavButton'
import NotConnect from './components/NotConnect'

const Header = () => {
  const router = useRouter()
  const isOwnedPage = router.pathname === '/owned'
  function goToOnSale() {
    router.push(routes.onsale.value)
  }
  function goToOwned() {
    router.push(routes.owned.value)
  }
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
            <NavButton label="On sale" isActive={!isOwnedPage} onClick={goToOnSale} />
            <NavButton label="My bid" onClick={() => console.log('My bid')} />
            <NavButton label="Owned" isActive={isOwnedPage} onClick={goToOwned} />
          </HStack>
          <HStack> {isOwnedPage ? <Connected /> : <NotConnect />}</HStack>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default Header
