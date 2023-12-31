import React from "react";
import Mesaage from "../Message/Mesaage";
import { Message } from "types/chat";
import styles from "./ChatBox.module.css";

interface ChatBoxProps {
  messages: Message[];
  scroll: React.RefObject<HTMLDivElement>;
}

export default function ChatBox({ messages, scroll }: ChatBoxProps) {
  return (
    <div className={styles.container} ref={scroll}>
      {messages?.map((message) => (
        <Mesaage key={message.id} message={message} />
      ))}
    </div>
  );
}
