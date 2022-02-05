import { Provider } from 'mobx-react'
import type { AppProps } from 'next/app'
import { rootStore } from '../stores'
import theme from 'theme'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider {...rootStore}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer theme="colored" />
      </ChakraProvider>
    </Provider>
  )
}

export default App
