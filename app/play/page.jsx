'use client';

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";


let walletKey = '';

export default function play(){
    const router = useRouter();
    const handleOnSumbit = (e) => {
        e.preventDefault();
        const randomNumber = Math.floor(Math.random() * 9000) + 1000;
        const playRoom = `/room/${randomNumber}`;
        router.push(playRoom);
    }
    return(
        <>
            <h1>¡Móchate!</h1>
            <form onSubmit={handleOnSumbit} target="">
                <input type="text" name="username" id="username" placeholder="Nombre de usuario" required/>
                <Phantom/>
                <input type="number" name="monto" id="amount" placeholder="Ingrese el monto" required/>
                <input type="text" name="walletV" id="wv" placeholder="Ingrese el wallet del prestador de servicios" required />
                <input type="submit" value="Crear sala"/>
            </form>
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