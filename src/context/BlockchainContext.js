import React, { useState } from 'react'
import { ethers } from 'ethers'
import BicycleHire from '../BicycleHire.json'

const BicycleHireAddress = '0x0285b50f6661dE1279Cd4D59d37f10532cE5789E'

export const BlockchainContext = React.createContext()
export const BlockchainProvider = ({ children }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(
    BicycleHireAddress,
    BicycleHire.abi,
    signer,
  )

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert('Please install Metamask')

      const accounts = await provider.send('eth_requestAccounts')
      console.log(accounts[0])
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object')
    }
  }

  return (
    <BlockchainContext.Provider value={{ connectWallet }}>
      {children}
    </BlockchainContext.Provider>
  )
}
