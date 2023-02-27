import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import mintABI from '../abi/mintABI.json'
import { ethers} from 'ethers'
import { useEffect, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'

const minAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

export default function Home() {
  const [accounts, setAccounts] = useState([]);
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
