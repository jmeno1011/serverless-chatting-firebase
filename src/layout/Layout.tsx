import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Haeder from "components/commons/Header/Haeder";
import { useDispatch } from "react-redux";
import { logout } from "features/auth";

// TODO: global 선언하기 위치 변경하기
declare global {
  export interface Window {
    google: any;
  }
}

export default function Layout() {
  const dispatch = useDispatch()

  const onSignOut = () => {
    window.google.accounts.id.disableAutoSelect();
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <Haeder onSignOut={onSignOut} />
      <div className={styles.pages}>
        <Outlet />
      </div>
    </div>
  );
}
