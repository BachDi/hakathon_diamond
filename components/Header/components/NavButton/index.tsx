import { Button } from '@chakra-ui/react'
import React from 'react'

interface INavButtonProps {
  label: string
  isActive?: boolean
  onClick: () => void
}
const NavButton = (props: INavButtonProps) => {
  const { label, isActive = false, onClick } = props

  return isActive ? (
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
      {label}
    </Button>
  ) : (
    <Button
      bg="background.blue.900"
      color="text.grey"
      _hover={{ bg: 'background.grey' }}
      fontSize="19px"
      lineHeight="29px"
      fontWeight="600"
      p="12px 40px"
      borderRadius="12px"
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default NavButton
