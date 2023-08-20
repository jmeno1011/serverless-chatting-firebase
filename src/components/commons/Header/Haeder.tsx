import React from 'react';
import styles from "./Header.module.css";

interface HaederProps {
  onSignOut: () => void;
}

export default function Haeder({ onSignOut }: HaederProps) {
  return (
    <header className={styles.container}>
      <h2 className={styles.name}>Title</h2>
      <button onClick={onSignOut}>logout</button>
    </header>
  )
}
