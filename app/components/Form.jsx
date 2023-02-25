'use client';

import { useRef } from "react";

export default function Form({ users }) {
    const username = useRef(0);
    const wallet = useRef(0);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        users.append({username, wallet});
        console.log(users);
    }

    return (
      <form>
        <label htmlFor="first">Username</label>
        <input type="text" id="first" name="first" required ref={username} />
  
        <label htmlFor="last">Wallet</label>
        <input type="text" id="last" name="last" required ref={wallet} />
  
        <button type="submit" onSubmit={handleOnSubmit}>Submit</button>
      </form>
    )
}