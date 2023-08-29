import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "features/auth";
import { auth } from "firebaseInit";
import { User } from "firebase/auth";
import { Header } from "components/commons";
import { ChatList } from "components/Home";
import styles from "./Layout.module.css";

export default function Layout() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const onSignOut = () => {
    // api를 이용 할 경우 log out
    // window.google.accounts.id.disableAutoSelect();
    auth.signOut();
    dispatch(logout());
  };

  useEffect(() => {
    auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        dispatch(login(user.uid));
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <Header onSignOut={onSignOut} />
      <div className={styles.pages}>
        <div className={styles.wrapper}>
          <ChatList />
          {pathname === "/" ? (
            <div className={styles.emptyRoom}>
              <h1>방을 선택해주세요~</h1>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
}
