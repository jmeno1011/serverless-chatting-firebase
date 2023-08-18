import React from 'react'
import styles from "./Layout.module.css";
import { Outlet } from 'react-router-dom';
import { useAuthDispatch } from 'context/auth';

export default function Layout() {
  const dispatch = useAuthDispatch();
  const signOut = () => {
    window.google.accounts.id.disableAutoSelect();
    dispatch("LOGOUT");
  };
  
  return (
    <div className={styles.container}>
      <header>
        <button onClick={signOut}>logout</button>
      </header>
      <Outlet />
    </div>
  )
}
