import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { ReactComponent as GoogleIcon } from "../../assets/google-plus.svg";

export default function LoginForm() {
  const [user, setUser] = useState(false);
  const googleSignIn = (response: any) => {
    setUser(true);
    console.log("Encoded JWT ID token: " + response.credential);
  };
  const onLogin = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_CLIENT_ID,
        callback: googleSignIn,
      });
    }
  };
  const signOut = () => {
    window.google.accounts.id.disableAutoSelect();
    setUser(false);
  };
  return (
    <div className={styles.container}>
      <h3>Sign Up</h3>
      <div>
        <button className={styles.loginButton} onClick={onLogin}>
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
