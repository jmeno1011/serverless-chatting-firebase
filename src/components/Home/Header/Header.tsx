import React from "react";
import styles from "./Header.module.css";

interface HeaderProps{
  room: string | undefined;
}

export default function Header({room}:HeaderProps) {
  return (
    <header className={styles.container}>
      <h1>{room} Room</h1>
    </header>
  );
}
