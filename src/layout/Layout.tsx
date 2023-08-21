import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Haeder from "components/commons/Header/Haeder";
import { useDispatch } from "react-redux";
import { logout } from "features/auth";

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
