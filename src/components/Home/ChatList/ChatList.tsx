import React from "react";
import styles from "./ChatList.module.css";
import { Link } from "react-router-dom";

const roomList = ["IT", "BOOK", "FOOD"];

export default function ChatList() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Room - List</h1>
      </header>
      <nav>
        <ul>
          {roomList.map((room) => (
            <li key={room} className={styles.li}>
              <Link to={`/${room}`}>{room}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
