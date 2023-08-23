import React, {useEffect} from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "features/auth";
import { auth } from "firebaseInit";
import { User } from "firebase/auth";
import { Header } from "components/commons";

export default function Layout() {
  const dispatch = useDispatch();

  const onSignOut = () => {
    // api를 이용 할 경우 log out
    // window.google.accounts.id.disableAutoSelect();
    auth.signOut();
    dispatch(logout());
  };

  useEffect(()=>{
    auth.onAuthStateChanged((user:User|null)=>{
      if(user){
        dispatch(login(user.uid));
      }else{
        dispatch(logout());
      }
    })
    
  },[])

  return (
    <div className={styles.container}>
      <Header onSignOut={onSignOut} />
      <div className={styles.pages}>
        <Outlet />
      </div>
    </div>
  );
}
