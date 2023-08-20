import React from 'react'
import styles from "./Layout.module.css";
import { Outlet } from 'react-router-dom';
import { useAuthDispatch } from 'context/auth';
import Haeder from 'components/commons/Header/Haeder';

// TODO: global 선언하기 위치 변경하기
declare global{
  export interface Window{
    google: any;
  }
}

export default function Layout() {
  const dispatch = useAuthDispatch();

  const onSignOut = () => {
    window.google.accounts.id.disableAutoSelect();
    dispatch("LOGOUT");
  };

  return (
    <div className={styles.container}>
      <Haeder onSignOut={onSignOut} />
      <Outlet />
    </div>
  )
}
