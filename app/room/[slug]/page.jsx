'use client';

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Connection, PublicKey } from '@solana/web3.js';


const connection = new Connection('https://api.mainnet-beta.solana.com');


const players = [];
let walletKey='';

export default function room({ params }){
    const router = useRouter();
    const [player, setPlayers] = useState(players);
    const username = useRef(null);


    const handleOnSubmit = (e) => {
        e.preventDefault();
        players.push({username: username.current.value, wallet: walletKey});
        setPlayers([...player, {username: username.current.value, wallet: walletKey}])
    }

    return(
        <>
            <h1>Sala de juego</h1>
            { (!players) ? players.append(userdata) : (
                <form onSubmit={handleOnSubmit} target="">
                    <label htmlFor="first">Username</label>
                    <input type="text" id="first" name="first" required ref={username} />

                    <Phantom/>
                    <input type="submit" id="smt" />
                </form>
                ) 
            }
            <h2>Jugadores</h2>
            {
                (players.length===1)?(
                <div>
                    <button onClick={(e)=>navigator.clipboard.writeText(window.location.toString())}>Invitar amigos</button>
                    <input type="number" name="deuda" id="wv" placeholder="Monto" />
                    <button>Agregar Wallet del Vendedor</button>
                </div>):
                (<div></div>)
            }
            <ul>
                {
                    players.map((user) => (
                        <li key={user.wallet}>{user.username}</li>
                    ))
                }
            </ul>
        </>
    )
}

function Phantom(){
    const [phantom, setPhantom] = useState(null);
  
    useEffect(() => {
      if ("solana" in window) {
        setPhantom(window["solana"]);
      }
    }, []);
  
    const [connected, setConnected] = useState(false);
  
    useEffect(() => {
      phantom?.on("connect", () => {
        setConnected(true);
        walletKey = phantom.publicKey.toString();
      });
  
      phantom?.on("disconnect", () => {
        setConnected(false);
      });
    }, [phantom]);
  
    const connectHandler = (e) => {
      e.preventDefault();
      phantom?.connect();
    };
  
    const disconnectHandler = () => {
      phantom?.disconnect();
    };
  
    if (phantom) {
      if (connected) {
        return (
          <button
            onClick={connectHandler}
            disabled={true}
          >
            Connect to Phantom
          </button>
        );
      }
  
      return (
        <button
          onClick={connectHandler}
          >
          Connect to Phantom
        </button>
      );
    }
  
    return (
      <a
        href="https://phantom.app/"
        target="_blank"
        className="bg-purple-500 px-4 py-2 border border-transparent rounded-md text-base font-medium text-white"
      >
        Get Phantom
      </a>
    );
};