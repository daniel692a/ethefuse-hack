'use client';

import { useRef, useState } from "react";
import Phantom from "../components/Phantom";
import styles from 'src/styles/Menu.module.css';

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
        setPlayers([...player, {username: username.current.value, wallet: wallet.current.value}]);
        console.log(players)
    }
    const [number, setNumber] = useState(null);
    const wheelRef = useRef(null);
  
    const spin = () => {
      const random = Math.floor(Math.random() * players.length);
      const deg = 360 * 5 + (360 / players.length) * (players.length - random - 0.5);
      wheelRef.current.style.transform = `rotate(${deg}deg)`;
      setTimeout(() => {
        setNumber(players[random].username);
        wheelRef.current.style.transform = '';
      }, 5000);
    };

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
            <div>
            <h1>Ruleta de números</h1>
            <p>Número seleccionado: {number || 'Ninguno'}</p>
            <div className={styles.wheelContainer}>
                <div ref={wheelRef} className={styles.wheel}>
                {players.map((user) => (
                    <div className={styles.option}>
                    {user.username}
                    </div>
                ))}
                </div>
            </div>
            <button onClick={spin}>Girar</button>
            </div>
            <Phantom/>
        </>
    )
}