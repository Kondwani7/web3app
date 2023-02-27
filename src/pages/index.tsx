import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import mintABI from '../abi/mintABI.json'
import { ethers, BrowserProvider, parseUnits } from 'ethers'
import { useEffect, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import { MetaMaskInpageProvider } from '@metamask/providers'
//enable the window to read the metamask provider
declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}

const minAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'


export default function Home() {
  const [accounts, setAccounts]: Array<any> = useState([]);
  //access metamask on a browser
  async function connectAccounts(){
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      setAccounts(accounts);
    }
  }

  useEffect(() => {
    connectAccounts();
  })
  //minting function
  const [mintAmount, setMintAmount] = useState(1);
  

  async function handleMint() {
    //follwed the new ethers v6 documentation: https://docs.ethers.org/v6-beta/getting-started/
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract= new ethers.Contract(
        minAddress,
        mintABI.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount))
        console.log(`response: ${response}`);
      } catch(err){
        console.log(`error:${err}}`);
      }
    }
  }

  return (
    <>
      <Head>
        <title>web3 app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className='text-3xl text-blue-500'>
          Web 3 app for minting
        </div>
      </main>
    </>
  )
}
