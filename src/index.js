//this allows us to use ChakraUI
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BlockchainContext } from './context/BlockchainContext'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BlockchainContext>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BlockchainContext>,
)

//can't resolve means missing npm
