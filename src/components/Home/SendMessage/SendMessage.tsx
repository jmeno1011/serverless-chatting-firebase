import React, { FormEvent, ChangeEvent } from "react";
import styles from "./SendMessage.module.css";

interface SendMessageProps {
  message: string;
  onMessage: (e: ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: (e: FormEvent<HTMLFormElement>) => void;
}

export default function SendMessage({message, onMessage,  onSendMessage}: SendMessageProps) {
  return (
    <form onSubmit={onSendMessage} className={styles.container}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        placeholder="type message..."
        value={message}
        onChange={onMessage}
        className={styles.messageInput}
      />
      <button type="submit" className={styles.messageSendButton}>
        Send
      </button>
    </form>
  );
}
