import React from 'react';
import styles from "./Header.module.css";

interface HeaderProps {
  onSignOut: () => void;
}

export default function Header({ onSignOut }: HeaderProps) {
  return (
    <header className={styles.container}>
      <h1 className={styles.name}>React - Chat</h1>
      <button onClick={onSignOut}>Sign Out</button>
    </header>
  )
}
