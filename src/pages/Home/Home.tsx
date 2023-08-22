import React from "react";
import styles from "./Home.module.css";
import { ChatList, ChatRoom } from "components/Home";
import SendMessage from "components/SendMessage/SendMessage";
import ChatBox from "components/Home/ChatBox/ChatBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <ChatList />
      <div>
        <h1>ChatRoom</h1>
        <ChatBox />
        <SendMessage />
      </div>
    </div>
  );
}
