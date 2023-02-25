import { MirrorWorld, ClusterEnvironment } from "@mirrorworld/web3.js"

export default function HomePage() {
    const mirrorworld = new MirrorWorld({
        apiKey: "mw_TxOBb8pfqKz3xmoJkvkZWyqHGZQRVsGP2tV", // Replace this with the API Key for your project
        env: ClusterEnvironment.testnet, // Can be ClusterEnvionment.mainnet for mainnet
    });
    return (
        <h1>
            Welcome!
        </h1>
    )
}