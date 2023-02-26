// 'use client';

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { MirrorWorld, ClusterEnvironment } from "@mirrorworld/web3.js"
// import '../../src/styles/globals.css';
// import Link from "next/link";
// import { sign } from "jsonwebtoken";
// import { useEffect } from "react";


// export default function Login(){
//     const router = useRouter();
//     const mirrorworld = new MirrorWorld({
//         apiKey: "mw_TxOBb8pfqKz3xmoJkvkZWyqHGZQRVsGP2tV", // Replace this with the API Key for your project
//         env: ClusterEnvironment.testnet, // Can be ClusterEnvionment.mainnet for mainnet
//     });

//     const [user, setUser] = useState()

//     async function login() {
//         const { user } = await mirrorworld.login()



//         setUser(user)
//     }

//     useEffect(()=>{
//         if(user){
//             const payload = {
//                 id: user.id,
//                 username: user.username,
//                 email: user.email
//             }
//             console.log(payload);
//             const options = {
//                 expiresIn: '1h',
//             }
//             let token = sign(payload, 'shhhh', options);
//             console.log(token);
//         }
        
//     },[user])

//     return (
//         <div>
//             <main>
//                 {
//                     !user ? (<button onClick={login}>Login to Mirror World</button>) : (<p>Welcome {user?.username}, Go to <Link href="/menu">Menu</Link></p>) 
//                 }
//             </main>
//         </div>
//     )
// }