import React from 'react'
import styles from "./Home.module.css"
import { ChatList, ChatRoom } from 'components/Home'

export default function Home() {
  return (
    <div className={styles.container}>
      <ChatList />
      <ChatRoom />
    </div>
  )
}
