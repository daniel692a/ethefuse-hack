'use client';

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MirrorWorld, ClusterEnvironment } from "@mirrorworld/web3.js"

const ProtectedRoute = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const mirrorworld = new MirrorWorld({
        apiKey: "mw_TxOBb8pfqKz3xmoJkvkZWyqHGZQRVsGP2tV", // Replace this with the API Key for your project
        env: ClusterEnvironment.testnet, // Can be ClusterEnvionment.mainnet for mainnet
    });
    const isLoggedIn = mirrorworld.isLoggedIn
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [])

  return(
        <>{children}</>
  )
}

export default ProtectedRoute
