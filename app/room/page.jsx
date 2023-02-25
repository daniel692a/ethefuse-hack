'use client';

import { useRef, useState } from "react";
import Phantom from "../components/Phantom";

const players = []
const wallets = new Set();

export default function room({ userdata }){
    const [player, setPlayers] = useState(players);
    const username = useRef(null);
    const wallet = useRef(null);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(wallets.has(wallet.current.value)){
            alert("Ya existe el wallet")
            return null;
        }

        wallets.add(wallet.current.value);

        players.push({username: username.current.value, wallet: wallet.current.value});
        setPlayers([...player, {username: username.current.value, wallet: wallet.current.value}])
        console.log(players)
    }

    return(
        <>
            <h1>Sala de juego</h1>
            { (!players) ? players.append(userdata) : (
                <form onSubmit={handleOnSubmit} target="">
                    <label htmlFor="first">Username</label>
                    <input type="text" id="first" name="first" required ref={username} />
            
                    <label htmlFor="last">Wallet</label>
                    <input type="text" id="last" name="last" required ref={wallet} />
            
                    <button type="submit">Submit</button>
                </form>
                ) 
            }
            <h2>Jugadores</h2>

            <ul>
                {
                    players.map((user) => (
                        <li>{user.username}</li>
                    ))
                }
            </ul>
            <Phantom/>
        </>
    )
}