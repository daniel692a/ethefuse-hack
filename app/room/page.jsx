'use client';

import Phantom from "../components/Phantom";
import { useRef, useState } from "react";

const players = [];
let walletKey='';

export default function room({ userdata }){
    const [player, setPlayers] = useState(players);
    const username = useRef(null);


    const handleOnSubmit = (e) => {
        e.preventDefault();
        players.push({username: username.current.value});
        setPlayers([...player, {username: username.current.value}])
        console.log(players)
    }

    return(
        <>
            <h1>Sala de juego</h1>
            { (!players) ? players.append(userdata) : (
                <form onSubmit={handleOnSubmit} target="">
                    <label htmlFor="first">Username</label>
                    <input type="text" id="first" name="first" required ref={username} />

                    <Phantom/>
                </form>
                ) 
            }
            <h2>Jugadores</h2>
            {
                (players.length===1)?(
                <div>
                    <button onClick={(e)=>navigator.clipboard.writeText(window.location.toString())}>Invitar amigos</button>
                    <button>Agregar Wallet del Vendedor</button>
                    <input type="number" name="deuda" id="wv" placeholder="Monto" />
                </div>):
                (<div></div>)
            }
            <ul>
                {
                    players.map((user) => (
                        <li>{user.username}</li>
                    ))
                }
            </ul>
        </>
    )
}