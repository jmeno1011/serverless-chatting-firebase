import React from "react";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { login } from "features/auth";
import { auth } from "firebaseInit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ReactComponent as GoogleIcon } from "assets/google-plus.svg";

export default function Login() {
  const dispatch = useDispatch();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // pop-up 형태로 로그인
    signInWithPopup(auth, provider).then((res) => {
      // redux - auth 에 추가하기 displayName이나 email 등등의 user 정보
      const { uid, displayName, email } = res.user;
      dispatch(login(uid));
    });
  };

  console.log();

  return (
    <div className={styles.container}>
      <h3>Sign Up</h3>
      <div>
        <button className={styles.loginButton} onClick={googleSignIn}>
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
