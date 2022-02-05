import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import {
  backgroundPrimary,
  backgroundSecondary,
  backgroundButtonBlue,
  backgroundButtonBlue100,
  backgroundWhite200,
  backgroundWhite400,
  backgroundWhite500,
  backgroundBlack50,
  textBlue,
  textGrey500,
  textDarkBlue,
  textGreen,
  textPrimary,
  textSecondary,
  textBlack500,
  textBlue100
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
        600: textBlue,
        900: textDarkBlue
      },
      green: textGreen,
      black: textBlack500
    },
    background: {
      primary: backgroundPrimary,
      secondary: backgroundSecondary,
      blue: {
        100: backgroundButtonBlue100,
        600: backgroundButtonBlue
      },
      white: {
        200: backgroundWhite200,
        400: backgroundWhite400,
        500: backgroundWhite500
      },
      black: backgroundBlack50
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    mono: 'Inter'
  }
})

export default theme
