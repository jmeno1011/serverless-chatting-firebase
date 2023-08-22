import React from 'react'
import styles from "./ChatRoom.module.css"
import SendMessage from 'components/SendMessage/SendMessage'

export default function ChatRoom() {
  return (
    <div className={styles.container}>
      <h1>ChatRoom</h1>
      <SendMessage />
    </div>
  )
}
