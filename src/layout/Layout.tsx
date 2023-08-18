import React from 'react'
import styles from "./Layout.module.css";
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}
