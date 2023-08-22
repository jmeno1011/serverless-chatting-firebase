import React from "react";
import styles from "./Home.module.css";
import { ChatList, ChatRoom } from "components/Home";
import SendMessage from "components/Home/SendMessage/SendMessage";
import ChatBox from "components/Home/ChatBox/ChatBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <ChatList />
      <div className={styles.chatRoom}>
        <header>
          <h1>ChatRoom</h1>
        </header>
        <div className={styles.chatBlock}>
          <ChatBox />
          <SendMessage />
        </div>
      </div>
    </div>
  );
}
