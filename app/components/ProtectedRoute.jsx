'use client';

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MirrorWorld, ClusterEnvironment } from "@mirrorworld/web3.js"

const ProtectedRoute = ({ children }) => {
  const router = useRouter()

  function hasJWT(){
    let flag = (localStorage.getItem("token")) ? true : false;
    return flag;
  }
  
  return(
        <>{hasJWT()?children:router.push("/login")}</>
  )
}

export default ProtectedRoute
