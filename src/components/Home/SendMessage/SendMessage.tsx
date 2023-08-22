import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "firebaseInit";
import React, { FormEvent, ChangeEvent, useState } from "react";
import styles from "./SendMessage.module.css"

export default function SendMessage() {
  const [message, setMessage] = useState<string>("");

  const onMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() === "") {
      console.log("Enter valid message");
      return;
    }
    if (auth.currentUser) {
      const { uid, displayName } = auth.currentUser;
      await addDoc(collection(db, "message"), {
        text: message,
        name: displayName,
        createdAt: serverTimestamp(),
        uid,
      });
    }
    setMessage('');
  };

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
      <button type="submit" className={styles.messageSendButton}>Send</button>
    </form>
  );
}
