import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import {
  backgroundPrimary,
  backgroundSecondary,
  textGrey500,
  textBlue100,
  textPrimary,
  textSecondary,
  textBlue600,
  backgroundBlue500,
  backgroundBlue600,
  backgroundBlue700,
  backgroundGrey700
} from './globalStyles'

//TODO: Our breakpoints (576px, 768px, 1200px, 1440px)
const breakpoints = createBreakpoints({
  base: '0em',
  sm: '36em',
  md: '48em',
  lg: '75em',
  xl: '90em'
})

const theme = extendTheme({
  //! Chakra Bug: https://github.com/chakra-ui/chakra-ui/pull/4268
  breakpoints,
  styles: {
    global: {
      'html, body': {
        background: 'white'
      }
    }
  },
  colors: {
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      grey: textGrey500,
      blue: {
        100: textBlue100,
        600: textBlue600
      }
    },
    background: {
      primary: backgroundPrimary,
      secondary: backgroundSecondary,
      blue: {
        500: backgroundBlue500,
        600: backgroundBlue600,
        700: backgroundBlue700
      },
      grey: backgroundGrey700
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    mono: 'Inter'
  }
})

export default theme
