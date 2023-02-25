'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MirrorWorld, ClusterEnvironment } from "@mirrorworld/web3.js"


export default function Login(){
    const router = useRouter();
    const mirrorworld = new MirrorWorld({
        apiKey: "mw_TxOBb8pfqKz3xmoJkvkZWyqHGZQRVsGP2tV", // Replace this with the API Key for your project
        env: ClusterEnvironment.testnet, // Can be ClusterEnvionment.mainnet for mainnet
    });

    const [user, setUser] = useState()

    async function login() {
        const { user } = await mirrorworld.login()
        console.log(user);
        setUser(user)
    }

    return (
        <div>
            <main>

                {
                    !user ? (<button onClick={login}>Login to Mirror World</button>) : (<p>Welcome {user?.username}</p>)
                    
                }
            </main>
        </div>
    )
}