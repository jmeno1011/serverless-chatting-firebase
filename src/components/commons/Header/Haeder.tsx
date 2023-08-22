import React from 'react';
import styles from "./Header.module.css";

interface HaederProps {
  onSignOut: () => void;
}

export default function Haeder({ onSignOut }: HaederProps) {
  return (
    <header className={styles.container}>
      <h1 className={styles.name}>React - Chat</h1>
      <button onClick={onSignOut}>Sign Out</button>
    </header>
  )
}
